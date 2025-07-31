import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {
  constructor(private router: Router) {}

  onContinue() {
    this.router.navigateByUrl('facesnaps');
}
}
