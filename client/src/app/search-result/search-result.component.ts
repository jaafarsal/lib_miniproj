import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute , private bookService:BookService) { }
  link:any ;
  data:any;

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.link = params['key'];
      this.bookService.searchBook(this.link).subscribe(books=> this.data =books);
      console.log(this.data);
      
    })
  }

}
