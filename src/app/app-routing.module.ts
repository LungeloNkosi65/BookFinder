import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { from } from 'rxjs';
import {BookDetailComponent} from './book-detail/book-detail.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'details/:id',component:BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
