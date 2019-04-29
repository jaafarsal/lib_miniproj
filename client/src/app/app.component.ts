import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';
//import {GlobalService} from "./global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]

})
export class AppComponent {
  title = 'client';
  constructor(
    //private configService: GlobalService
  ) {
      //this.showConfig();
  }
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
}
