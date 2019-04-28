import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../class/book';
import { UserService } from '../service/user.service';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent implements OnInit {

  constructor(private bookservice: BookService,
    private cookieService: CookieService,
    private router: Router,
    private userService: UserService) { }
  books: Book[];
  checkLogingIn(){
    if(this.cookieService.get('access_token')){
      this.router.navigate(['/books']);
    }else{
      this.router.navigate(['/login']);
    }
  }
  ngOnInit() {
    this.checkLogingIn();
    this.bookservice.getbooks().subscribe(book=>this.books=book);
  }
  logOut(){
    this.cookieService.delete( 'access_token');
    this.router.navigate(['/login']);
  }

}
