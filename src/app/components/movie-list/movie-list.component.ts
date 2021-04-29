import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    movies: Movie[];
    totalPages: number;
    page: number;

    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute,
        private router: Router
    ) { 
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const page = +params['page'] || 1;
            this.page = page;
        });
        this.movieService.getPopularMovies(this.page).subscribe(movies => {
            this.movies = movies.results;
            this.totalPages = movies.total_pages;
        });
    }

}
