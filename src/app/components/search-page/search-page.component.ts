import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
    search: string;
    movies: Movie[];
    page: number;
    totalPages: number;
    results: number;

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
            const query = params['search'];
            this.search = query;
        });
        if (this.search) {
            this.movieService.getMoviesBySearchString(this.search, this.page).subscribe(movies => {
                this.movies = movies.results;
                this.totalPages = movies.total_pages;
                this.results = movies.total_results;
            });
        }
    }

    onSubmit() {
        this.router.navigate(['/search'], { queryParams: { search: this.search, page: 1 }, queryParamsHandling: 'merge' });
    }

    resultNumber() {
        const resultsPerPage = this.movies.length;
        const page = this.page;
        const from = resultsPerPage * page - resultsPerPage + 1;
        const to = resultsPerPage * page
        return {from, to};
    }

}
