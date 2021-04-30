import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { Person } from 'src/app/models/Person';
import { Tv } from 'src/app/models/Tv';

@Component({
    selector: 'app-favourites-page',
    templateUrl: './favourites-page.component.html',
    styleUrls: ['./favourites-page.component.css']
})
export class FavouritesPageComponent implements OnInit {
    favouriteMovies: Movie[];
    favouriteTvs: Tv[];
    favouritePeople: Person[];

    constructor() { }

    ngOnInit(): void {
        this.favouriteMovies = JSON.parse(localStorage.getItem('favourite-movies')) || [];
        this.favouriteTvs = JSON.parse(localStorage.getItem('favourite-tvshows')) || [];
        this.favouritePeople = JSON.parse(localStorage.getItem('favourite-people')) || [];
    }

}
