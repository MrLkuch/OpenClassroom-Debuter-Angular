import { Component, OnInit } from '@angular/core';
import {FaceSnapClass } from '../models/face-snap-class';
import { NgStyle, NgClass, UpperCasePipe, DatePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-single-face-snap',
  imports: [ NgStyle, NgClass, UpperCasePipe, DatePipe, CommonModule ],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss'
})
export class SingleFaceSnap {

   faceSnap!: FaceSnapClass;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}
