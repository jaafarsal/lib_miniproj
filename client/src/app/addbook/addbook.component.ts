import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../class/book';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  book = new Book();
  constructor(private bookservice: BookService) { }

  AddbookForm:FormGroup;
  ngOnInit() {
    this.AddbookForm = new FormGroup({
      'bookData': new FormGroup({
          'title':new FormControl(null,[Validators.required]),
          'author':new FormControl(null,[Validators.required]),
          'keywords':new FormControl(null,[Validators.required]),
          'publisher':new FormControl(null,[Validators.required])
      })
    });
  }

  onSubmit(){
    // console.log(this.AddbookForm.value['bookData']['title']); book=>this.books=book
    this.book.title = this.AddbookForm.value['bookData']['title'];
    this.book.author = this.AddbookForm.value['bookData']['author'];
    this.book.keywords = this.AddbookForm.value['bookData']['keywords'];
    this.book.publisher = this.AddbookForm.value['bookData']['publisher'];
    this.bookservice.Addbook(this.book).subscribe();
    // console.log(this.book);
  }

}
