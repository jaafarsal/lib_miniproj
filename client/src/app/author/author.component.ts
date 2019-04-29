import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService) { }

    checkLogingIn(){
      if(this.cookieService.get('access_token')){
        this.router.navigate(['/books']);
      }else{
        this.router.navigate(['/login']);
      }
    }


  ngOnInit() {
    this.checkLogingIn();
  }

}
