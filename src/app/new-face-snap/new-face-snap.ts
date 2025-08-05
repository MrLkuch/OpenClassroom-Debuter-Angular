import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.snapForm = this.formBuilder.group({
          title: [null],
          description: [null],
          imageUrl: [null],
          location: [null]
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
    console.log(this.snapForm.value);
}
}
