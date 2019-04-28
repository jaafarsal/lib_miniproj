import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private cookieService: CookieService) { }

  // convenience getter for easy access to form fields
  get f() { return this.LoginForm.controls; }

  checkLogingIn(){
    if(this.cookieService.get('access_token')){
      this.router.navigate(['/books']);
    }else{
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {

    this.checkLogingIn();

    this.LoginForm = this.formBuilder.group({
      email:      ['', Validators.required],
      password:   ['', Validators.required]
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
          console.log(data);
          this.cookieService.set( 'access_token', data.access_token);
          this.router.navigate(['/books']);
      },
      err => {
          console.log(err);
      },
      () => {
          console.log("Complete function triggered.");
      }
    );

  }

}
