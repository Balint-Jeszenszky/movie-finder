import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PagerComponent } from './components/pager/pager.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { FavouritesPageComponent } from './components/favourites-page/favourites-page.component';
import { PersonCardComponent } from './components/person-card/person-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieDetailsComponent,
    PersonDetailsComponent,
    PagerComponent,
    SearchPageComponent,
    FavouritesPageComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
