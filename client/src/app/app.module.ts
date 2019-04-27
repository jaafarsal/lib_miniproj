import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    BookaddComponent,
    RegisterComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      AppRoutingModule,
    BrowserModule, AppRoutingModule,RouterModule,
    HttpClientModule,FormsModule,ReactiveFormsModule ,
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
