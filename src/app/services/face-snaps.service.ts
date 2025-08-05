import { FaceSnapClass } from './../models/face-snap-class';
import { Injectable } from '@angular/core';
import { SnapType } from '../models/snap-type.type';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {}


  getAllFaceSnaps(): Observable<FaceSnapClass[]> {
      return this.http.get<FaceSnapClass[]>('http://localhost:3000/facesnaps');
  }



  getFaceSnapById(faceSnapId: number): Observable<FaceSnapClass> {
      return this.http.get<FaceSnapClass>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnapClass> {
      return this.getFaceSnapById(faceSnapId).pipe(
          map(faceSnap => ({
              ...faceSnap,
              snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
          })),
          switchMap(updatedFaceSnap => this.http.put<FaceSnapClass>(
              `http://localhost:3000/facesnaps/${faceSnapId}`,
              updatedFaceSnap)
          )
      );
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnapClass> {
      return this.getAllFaceSnaps().pipe(
          map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
          map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
          map(previousFacesnap => ({
              ...formValue,
              snaps: 0,
              createdDate: new Date(),
              id: previousFacesnap.id + 1
          })),
          switchMap(newFacesnap => this.http.post<FaceSnapClass>(
              'http://localhost:3000/facesnaps',
              newFacesnap)
          )
      );
    }
}