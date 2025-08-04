import { Component } from '@angular/core';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapClass } from '../models/face-snap-class';
import { FaceSnapsService } from '../services/face-snaps.service';
import { interval, tap, takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnap],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss'
})
export class FaceSnapList {
 faceSnaps!: FaceSnapClass[];
  private destroy$!: Subject<boolean>;

 constructor(private faceSnapsService: FaceSnapsService) { }
 ngOnInit(): void {

  this.destroy$ = new Subject<boolean>();

    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
    interval(1000).pipe(
    tap(console.log),
    takeUntil(this.destroy$)
).subscribe();

interval(1000).subscribe(value => console.log(value % 3 !== 0 ? 'Tick' : 'BANG'));
}

ngOnDestroy(): void {
    this.destroy$.next(true);
}
}
