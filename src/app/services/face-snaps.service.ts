import { Injectable } from '@angular/core';
import { FaceSnapClass } from '../models/face-snap-class';
import { SnapType } from '../models/snap-type.type';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
 private faceSnaps : FaceSnapClass[] = [
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
      ).withLocation('à la montagne'),
      new FaceSnapClass(
        'Un bon repas',
        'Mmmh que c\'est bon !',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        156
      )
    ];

    getFaceSnaps(): FaceSnapClass[] {
    return [...this.faceSnaps];
  }

     getFaceSnapById(faceSnapId: string): FaceSnapClass {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }
}