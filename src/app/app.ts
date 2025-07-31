import { Component, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [FaceSnap, FaceSnapList,Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('snapface');

 
}
