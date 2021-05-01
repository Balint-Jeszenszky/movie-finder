import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
    /**
     * the movie that the card displays
     */
    @Input() movie: Movie;

    /**
     * boolean value showing if this movie marked as a favourite
     */
    favourite: boolean;

    constructor() { }

    ngOnInit(): void {
        const favourites = JSON.parse(localStorage.getItem('favourite-movies')) as Movie[] | null;
        this.favourite = !!favourites?.find(m => m.id === this.movie.id);
    }

    /**
     * sets or resets the movie as a favouirite if called
     */
    setFavourite() {
        let favourites = JSON.parse(localStorage.getItem('favourite-movies')) as Movie[] | null || [];
        if (this.favourite) {
            favourites = favourites.filter(m => m.id !== this.movie.id)
        } else {
            favourites.push(this.movie);
        }
        this.favourite = !this.favourite;
        localStorage.setItem('favourite-movies', JSON.stringify(favourites));
    }

}
