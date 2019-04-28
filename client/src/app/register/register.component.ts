import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private cookieService: CookieService) { }

  // convenience getter for easy access to form fields
  get f() { return this.RegisterForm.controls; }


  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({
      firstName:  ['', Validators.required],
      lastName:   ['', Validators.required],
      email:      ['', Validators.required],
      password:   ['', Validators.required],
      confirmPassword:   ['', Validators.required]
    });
  }
  checkLogingIn(){
    if(this.cookieService.get('access_token')){
      this.router.navigate(['/books']);
    }else{
      this.router.navigate(['/login']);
    }
  }
  onSubmit() {

    this.checkLogingIn();

    this.submitted = true;

    // stop here if form is invalid
    if (this.RegisterForm.invalid) {
      return;
    }

    this.userService.register(this.RegisterForm.value).subscribe(
      data => {
          console.log(data);
          this.router.navigate(['/login'])
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
