import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookaddComponent } from './books/bookadd.component';
import { AddbookComponent } from './addbook/addbook.component';
import { SearchResultComponent } from 'src/app/search-result/search-result.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent},
    {path: 'author', component: AuthorComponent},
    {path: 'books', component: BookaddComponent , data: { animation: 'heroes' } },
    {path: 'books/:key', component: SearchResultComponent },
    {path: 'booksadd', component: AddbookComponent , data: { animation: 'hero' }},
    {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
