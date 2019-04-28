import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';
import { ApiUrl } from '../global/config';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders();
  constructor(private http : HttpClient) { 
    this.headers = this.getHeaders();
  }

  getHeaders() :HttpHeaders {
    let headers = new HttpHeaders().set('Content-Type' , 'application/json');
    headers = headers.append("Access-Control-Allow-Origin", "*");
    headers = headers.append("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");
    return headers;
  } 

  login(user : User){
    return this.http.post(ApiUrl + 'api/users/login',
    JSON.stringify(user) ,{headers: this.headers});
  }

  register(user : User){
    console.log(ApiUrl + 'api/users/signup');
    return this.http.post(ApiUrl + 'api/users/signup',
    JSON.stringify(user) ,{headers: this.headers});
  }

}
