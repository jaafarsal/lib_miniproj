import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';
// import { SwPush } from '@angular/service-worker';
//import {GlobalService} from "./global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]

})
export class AppComponent {
  title = 'client';
  constructor() {
    
  }
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
