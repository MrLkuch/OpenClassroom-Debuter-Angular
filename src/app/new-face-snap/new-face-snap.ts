import { Router } from '@angular/router';
import { FaceSnapsService } from './../services/face-snaps.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { FaceSnapClass } from '../models/face-snap-class';
import { UpperCasePipe, DatePipe, AsyncPipe, CommonModule} from '@angular/common';

@Component({
  selector: 'app-new-face-snap',
  imports: [ReactiveFormsModule, UpperCasePipe,DatePipe, AsyncPipe, CommonModule],
  templateUrl: './new-face-snap.html',
  styleUrl: './new-face-snap.scss'
})
export class NewFaceSnap {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnapClass>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
            private FaceSnapsService: FaceSnapsService,
            private Router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
      this.snapForm = this.formBuilder.group({
          title: [null, [Validators.required]],
          description: [null, [Validators.required]],
          imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
          location: [null]
      }, {
    updateOn: 'blur'
    });

      this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
        map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
    }) )
      );
  }

  onSubmitForm() {
      this.FaceSnapsService.addFaceSnap(this.snapForm.value).pipe(
          tap(() => this.Router.navigateByUrl('/facesnaps'))
      ).subscribe();
  }
}
