import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

const routes: Routes = [
    { path: '', component: MovieListComponent },
    { path: 'movie/:id', component: MovieDetailsComponent },
    { path: 'person/:id', component: PersonDetailsComponent },
    { path: 'search', component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
