import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieCredits } from 'src/app/models/MovieCredits';
import { MovieDetails } from 'src/app/models/MovieDetails';
import { MovieSearchResult } from 'src/app/models/MovieSearchResult';
import { FavouriteMoviesService } from 'src/app/services/favourite-movies.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    private m: Movie;
    /**
     * the movie that the page displays
     */
    movie: MovieDetails;

    /**
     * boolean value showing if this movie marked as a favourite
     */
    favourite: boolean;

    /**
     * credits for this movie
     */
    credits: MovieCredits;

    /**
     * recommended similar movies
     */
    recommendations: MovieSearchResult;

    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute,
        private favouriteMoviesService: FavouriteMoviesService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const movieId = +params['id'];
            this.movieService.getMovieDetails(movieId).subscribe(movie => {
                this.movie = movie;
                this.m = {
                    id: this.movie.id,
                    title: this.movie.title,
                    overview: this.movie.overview,
                    poster_path: this.movie.poster_path
                };
                this.favouriteMoviesService.getFavourites().subscribe(favourites => {
                    this.favourite = !!favourites.find(m => m.id === this.movie.id);
                });
            });
            this.movieService.getMovieCredits(movieId).subscribe(credits => this.credits = credits);
            this.movieService.getRecommendationsForMovie(movieId).subscribe(recommendations => this.recommendations = recommendations);
        });
    }

    /**
     * all spoken language concatenated as a string with a comma and a space
     * @returns a string of the movie's all spoken languages
     */
    getSpokenLanguages(): string {
        return this.movie.spoken_languages.map(l => l.name).join(', ');
    }

    /**
     * all genres concatenated as a string with a comma and a space
     * @returns a string of the movie's all genres
     */
    getGenres(): string {
        return this.movie.genres.map(g => g.name).join(', ');
    }

    /**
     * all production countries concatenated as a string with a comma and a space
     * @returns a string of the movie's all genres production countries
     */
    getProductionCountries(): string {
        return this.movie.production_countries.map(c => c.name).join(', ');
    }

    /**
     * all production companies concatenated as a string with a comma and a space
     * @returns a string of the movie's all genres production companies
     */
    getProductionCompanies(): string {
        return this.movie.production_companies.map(c => `${c.name} (${c.origin_country})`).join(', ');
    }

    /**
     * sets or resets the movie as a favouirite if called
     */
    setFavourite() {
        if (this.favourite) {
            if (confirm(`Remove ${this.movie.title} from favourites?`)) {
                this.favouriteMoviesService.removeFavourite(this.m);
            }
        } else {
            this.favouriteMoviesService.addFavourite(this.m);
        }
    }

}
