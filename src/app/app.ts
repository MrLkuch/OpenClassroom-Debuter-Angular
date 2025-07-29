import { Component, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnapClass } from './models/face-snap-class';
@Component({
  selector: 'app-root',
  imports: [FaceSnap],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('snapface');

   mySnap!: FaceSnapClass;

  ngOnInit() {
    this.mySnap = new FaceSnapClass(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
  }
}
