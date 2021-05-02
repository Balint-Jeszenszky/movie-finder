import { Component, OnInit, Input } from '@angular/core';
import { FavouriteMoviesService } from 'src/app/services/favourite-movies.service';
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

    constructor(private favouriteMoviesService: FavouriteMoviesService) { }

    ngOnInit(): void {
        this.favouriteMoviesService.getFavourites().subscribe(favourites => {
            this.favourite = !!favourites.find(m => m.id === this.movie.id);
        });
    }

    /**
     * sets or resets the movie as a favouirite if called
     */
    setFavourite() {
        if (this.favourite) {
            if (confirm(`Remove ${this.movie.title} from favourites?`)) {
                this.favouriteMoviesService.removeFavourite(this.movie);
            }
        } else {
            this.favouriteMoviesService.addFavourite(this.movie);
        }
    }

}
