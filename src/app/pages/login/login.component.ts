import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { loginService } from './login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usersList: any[] = [];
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient,
    private loginService: loginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginService.getAllUsers().subscribe(
      (res: any) => {
        this.usersList = res;
        console.log(this.usersList);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  handleSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (
      this.usersList.filter((e) => e.email === email && e.password === password)
        .length > 0
    ) {
      let token = this.usersList.filter(
        (e) => e.email === email && e.password === password
      );

      localStorage.setItem('currentUser', JSON.stringify(token));
      alert('Logged in successfully.');
      this.router.navigate(['/']);
    } else {
      alert('User not found ! ');
    }

    // if () {
    //   console.log('User exists!');
    //   alert('login successful');
    // } else {
    //   console.log('User does not exist!');
    //   alert('login failed');
    // }
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
