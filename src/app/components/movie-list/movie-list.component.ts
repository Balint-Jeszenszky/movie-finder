import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    movies: Movie[];
    page: number;

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.movieService.getPopularMovies().subscribe(movies => {
            this.movies = movies.results;
            this.page = movies.page;
        });
    }

}
