import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { Person } from 'src/app/models/Person';
import { Tv } from 'src/app/models/Tv';
import { FavouriteMoviesService } from 'src/app/services/favourite-movies.service';
import { FavouritePeopleService } from 'src/app/services/favourite-people.service';
import { FavouriteTvsService } from 'src/app/services/favourite-tvs.service';

@Component({
    selector: 'app-favourites-page',
    templateUrl: './favourites-page.component.html',
    styleUrls: ['./favourites-page.component.css']
})
export class FavouritesPageComponent implements OnInit {
    /**
     * array of the user's favourite movies
     */
    favouriteMovies: Movie[];

    /**
     * array of the user's favourite tv shows
     */
    favouriteTvs: Tv[];

    /**
     * array of the user's favourite people
     */
    favouritePeople: Person[];

    constructor(
        private favouriteMoviesService: FavouriteMoviesService,
        private favouriteTvService: FavouriteTvsService,
        private favouritePeolpeService: FavouritePeopleService
    ) { }

    ngOnInit(): void {
        this.favouriteMoviesService.getFavourites().subscribe(favourites => this.favouriteMovies = favourites);
        this.favouriteTvService.getFavourites().subscribe(favourites => this.favouriteTvs = favourites);
        this.favouritePeolpeService.getFavourites().subscribe(favourites => this.favouritePeople = favourites);
    }

}
