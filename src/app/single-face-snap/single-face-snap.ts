import { Component, OnInit } from '@angular/core';
import {FaceSnapClass } from '../models/face-snap-class';
import { NgStyle, NgClass, UpperCasePipe, DatePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-face-snap',
  imports: [ NgStyle, NgClass, UpperCasePipe, DatePipe ],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss'
})
export class SingleFaceSnap {

  faceSnap!: FaceSnapClass;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }
  
  // ...
  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(): void {
    if(this.userHasSnapped){
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
}
