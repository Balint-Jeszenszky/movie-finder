import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
    @Input() movie: Movie;
    favourite: boolean;

    constructor() { }

    ngOnInit(): void {
        const favourites = JSON.parse(localStorage.getItem('favourites')) as Movie[] | null;
        this.favourite = !!favourites?.find(m => m.id === this.movie.id);
    }

    setFavourite() {
        let favourites = JSON.parse(localStorage.getItem('favourites')) as Movie[] | null || [];
        if (this.favourite) {
            favourites = favourites.filter(m => m.id !== this.movie.id)
        } else {
            favourites.push(this.movie);
        }
        this.favourite = !this.favourite;
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }

}
