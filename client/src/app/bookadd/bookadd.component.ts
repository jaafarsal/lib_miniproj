import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../class/book';

@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent implements OnInit {

  constructor(private bookservice: BookService) { }
  books: Book[];

  ngOnInit() {
    this.bookservice.getbooks().subscribe(book=>this.books=book);
  }

}
