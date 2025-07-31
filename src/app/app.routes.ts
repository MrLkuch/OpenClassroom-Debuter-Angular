import { Routes } from '@angular/router';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { LandingPage } from './landing-page/landing-page';
import { SingleFaceSnap } from './single-face-snap/single-face-snap';

export const routes: Routes = [
     { path: 'facesnaps/:id', component: SingleFaceSnap },
     { path: 'facesnaps', component: FaceSnapList },
    { path: '', component: LandingPage }
];
