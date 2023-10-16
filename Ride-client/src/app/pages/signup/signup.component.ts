import { Component } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  username!: string;
  email!: string;
  password!: string;
  birthday!: string;

  constructor(private signupservice: SignupService, private router: Router) {}
  signSubmit() {
    this.signupservice
      .signup(this.username, this.email, this.password)
      .subscribe({
        next: (response) => {
          // Handle successful signup response
          console.log('Signup successful!', response);
          alert('Signup successful!');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          // Handle signup error
          console.error('Signup failed!', error);
          alert('signup failed try again!');
          this.router.navigate(['/']);
        },
      });
  }
}
