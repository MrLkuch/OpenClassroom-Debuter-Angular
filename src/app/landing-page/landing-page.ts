import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-landing-page',
  imports: [FormsModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

  userEmail = 'me@my-house.com';
  constructor(private router: Router) {}

    ngOnInit(): void {
  }

  onContinue() {
    this.router.navigateByUrl('facesnaps');
  }
  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }
}
