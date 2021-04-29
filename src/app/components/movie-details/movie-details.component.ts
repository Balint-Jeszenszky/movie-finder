import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/models/MovieDetails';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    movie: MovieDetails;
    favourite: boolean;

    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const movieId = +params['id'];
            this.movieService.getMovieDetails(movieId).subscribe(movie => this.movie = movie);
        });
    }

    getSpokenLanguages(): string {
        return this.movie.spoken_languages.map(l => l.name).join(', ');
    }

    getGenres(): string {
        return this.movie.genres.map(g => g.name).join(', ');
    }

    getProductionCountries(): string {
        return this.movie.production_countries.map(c => c.name).join(', ');
    }

    getProductionCompanies(): string {
        return this.movie.production_companies.map(c => `${c.name} (${c.origin_country})`).join(', ');
    }

}
