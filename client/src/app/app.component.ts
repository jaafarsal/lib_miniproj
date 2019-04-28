import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
//import {GlobalService} from "./global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(
    //private configService: GlobalService
  ) {
      //this.showConfig();
  }
  showConfig() {
    //this.configService.getConfig()
        //.subscribe((data => console.log(data)));
  }
}
