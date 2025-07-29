import { Component, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
@Component({
  selector: 'app-root',
  imports: [FaceSnap],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('snapface');
}
