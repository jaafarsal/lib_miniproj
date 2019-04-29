import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private cookieService: CookieService) { }

  ngOnInit() {
  }
  logOut(){
    this.cookieService.delete( 'access_token');
    this.router.navigate(['/login']);
  }
  values = '';
  
  onKey(event: any) { // without type info
    this.values = event.target.value ;
  }
}
