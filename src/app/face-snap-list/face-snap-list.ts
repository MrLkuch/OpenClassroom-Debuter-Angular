import { Component } from '@angular/core';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapClass } from '../models/face-snap-class';
import { FaceSnapsService } from '../services/face-snaps.service';
import { interval, tap, takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss'
})
export class FaceSnapList {
 faceSnaps!: FaceSnapClass[];

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }
}
