import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapClass } from '../models/face-snap-class';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap, AsyncPipe, CommonModule],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss'
})
export class FaceSnapList {
 faceSnaps$!: Observable<FaceSnapClass[]>;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
     this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }
}
