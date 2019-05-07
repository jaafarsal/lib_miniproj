import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';
import { SwPush } from '@angular/service-worker';
import { BookService } from '../service/book.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  submitted = false;
  publicVapidkey = 'BH1E4EfKoR1kobs_XzW8HenHb3vivMgySwUH1-i77NX_DKgCWYDha1GeDqwVKfobXxqCRpm2ebYNcZNc9zpvkOc';

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService,
    private swPush: SwPush,
    private bookservice: BookService) { }

  // convenience getter for easy access to form fields
  get f() { return this.LoginForm.controls; }

  checkLogingIn() {
    if (this.cookieService.get('access_token')) {
      this.router.navigate(['/books']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {

    this.checkLogingIn();

    this.LoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.LoginForm.invalid) {
      return;
    }

    this.userService.login(this.LoginForm.value).subscribe(
      data => {
        // console.log(data);
        this.cookieService.set('access_token', data['access_token']);
        console.log('aaa');
        // this.sendSubscription(111);
        this.router.navigate(['/books']);
      },
      err => {
        console.log(err);
      },
      () => {
        // console.log('Complete function triggered.');
      }
    );

  }

  sendSubscription(userId: number) {
    console.log(this.swPush.isEnabled);
    if (this.swPush.isEnabled) {
    this.swPush.requestSubscription({ serverPublicKey: this.publicVapidkey }).then(susbscription => {
      this.bookservice.subscribe(susbscription, userId).subscribe();
    });
    }
  }
}
