import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './components/movie-list/movie-list.component'
import {ContactComponent} from './pages/contact/contact.component'
import {MoviePageComponent} from './pages/movie-page/movie-page.component'
const routes: Routes = [
  {path: 'contact',component:ContactComponent},
  {path: '',component:MovieListComponent},
  {path:'movies/:id',component:MoviePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
