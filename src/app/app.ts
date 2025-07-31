import { Component, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnapList } from './face-snap-list/face-snap-list';

@Component({
  selector: 'app-root',
  imports: [FaceSnap, FaceSnapList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('snapface');

 
}
