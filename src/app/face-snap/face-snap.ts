import { Component, Input, OnInit } from '@angular/core';
import {FaceSnapClass } from '../models/face-snap-class';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class FaceSnap {

  @Input() FaceSnapClass!: FaceSnapClass;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  onSnap(): void {
    if(this.userHasSnapped){
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.FaceSnapClass.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
      this.FaceSnapClass.addSnap();
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped = true;
  }
}

