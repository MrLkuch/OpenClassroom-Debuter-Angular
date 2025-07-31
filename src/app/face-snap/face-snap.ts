import { Component, Input, OnInit } from '@angular/core';
import {FaceSnapClass } from '../models/face-snap-class';
import { NgStyle, NgClass, UpperCasePipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class FaceSnap {

  @Input() FaceSnapClass!: FaceSnapClass;
  
  constructor(private router: Router) {}
  onViewFaceSnap() {
      this.router.navigateByUrl(`facesnaps/${this.FaceSnapClass.id}`);
    }
}

