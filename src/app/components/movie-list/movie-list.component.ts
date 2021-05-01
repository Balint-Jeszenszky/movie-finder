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
    /**
     * a list of movies to display on the page
     */
    movies: Movie[];

    /**
     * the total number of pages
     */
    totalPages: number;

    /**
     * the current page
     */
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
