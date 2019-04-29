import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BookaddComponent } from './books/bookadd.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SearchResultComponent } from './search-result/search-result.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    BookaddComponent,
    RegisterComponent,
    AddbookComponent,
    SearchResultComponent,
    NavbarComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
