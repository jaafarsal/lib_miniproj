import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../class/book';
import { ApiUrl } from '../global/config';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  headers = new HttpHeaders();
  constructor(private http : HttpClient) { 
    this.headers = this.getHeaders();
  }

  getHeaders() :HttpHeaders {
    const headers = new HttpHeaders().set('Content-Type' , 'application/json') 
    return headers;
  } 

  getbooks():Observable<Book[]>{
    return this.http.get<Book[]>(ApiUrl + 'api/books',
    {headers: this.headers});
  }
  
  Addbook(book : Book){
    return this.http.post(ApiUrl + 'api/books/addbook',
    JSON.stringify(book) ,{headers: this.headers});
  }

  Editbook(isbn : number , book : Book){
    return this.http.post(ApiUrl + 'api/books/editbook/' + isbn ,
    JSON.stringify(book),{headers: this.headers});
  }

  Deletebook(isbn : number){
    return this.http.post(ApiUrl + 'api/books/deletebook/' + isbn ,
    {headers: this.headers});
  }

  searchBook(key : any){
    return this.http.get(ApiUrl + 'api/books/' + key ,
    {headers: this.headers});
  }

  subscribe(sub , id){
    return this.http.post(ApiUrl + 'api/books/subscribe/' + id ,
    JSON.stringify(sub) , {headers: this.headers});
  }
}
