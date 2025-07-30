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

  faceSnaps!: FaceSnapClass[];

  ngOnInit() {
     this.faceSnaps = [
      new FaceSnapClass(
        'Archibald',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        10
      ),
      new FaceSnapClass(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        new Date(),
        6
      ),
      new FaceSnapClass(
        'Un bon repas',
        'Mmmh que c\'est bon !',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        156
      )
    ];
    this.faceSnaps[1].setLocation('à la montagne');
  }
}
