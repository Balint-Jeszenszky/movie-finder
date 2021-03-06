import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { Person } from 'src/app/models/Person';
import { Tv } from 'src/app/models/Tv';
import { MovieService } from 'src/app/services/movie.service';
import { PersonService } from 'src/app/services/person.service';
import { TvService } from 'src/app/services/tv.service';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
    /**
     * the search string
     */
    search: string;

    /**
     * array of movies to show as a result
     */
    movies: Movie[];

    /**
     * array of people to show as a result
     */
    people: Person[];

    /**
     * array of tv shows to show as a result
     */
    tvShows: Tv[];

    /**
     * the current page number
     */
    page: number;

    /**
     * number of pages available for this search
     */
    totalPages: number;

    /**
     * number of results for a search
     */
    results: number;

    /**
     * available search types
     */
    searchTypes = ['movie', 'person', 'tv'];

    /**
     * type of the search
     */
    searchType: 'movie' | 'person' | 'tv';

    constructor(
        private movieService: MovieService,
        private personService: PersonService,
        private tvService: TvService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const page = +params['page'] || 1;
            this.page = page;
            const search = params['search'];
            this.search = search;
            const searchType = params['type'] || 'movie';
            this.searchType = searchType;
        });
        if (this.search && this.searchType === 'movie') {
            this.movieService.getMoviesBySearchString(this.search, this.page).subscribe(movies => {
                this.movies = movies.results;
                this.totalPages = movies.total_pages;
                this.results = movies.total_results;
            });
        } else if (this.search && this.searchType === 'person') {
            this.personService.getPeopleBySearchString(this.search, this.page).subscribe(people => {
                this.people = people.results;
                this.totalPages = people.total_pages;
                this.results = people.total_results;
            });
        } else if (this.search && this.searchType === 'tv') {
            this.tvService.getTvBySearchString(this.search, this.page).subscribe(tv => {
                this.tvShows = tv.results;
                this.totalPages = tv.total_pages;
                this.results = tv.total_results;
            });
        }
    }

    /**
     * set the query parameters in the url for a search
     */
    onSubmit() {
        this.router.navigate(['/search'], { queryParams: { search: this.search, page: 1 }, queryParamsHandling: 'merge' });
    }

    /**
     * the results nummber range on the page
     * @returns an object with keys 'from' and 'to' as the start and end of the range
     */
    resultNumber() {
        const resultsPerPage = this.movies?.length || this.people?.length || this.tvShows?.length;
        const page = this.page;
        const from = resultsPerPage * page - resultsPerPage + 1;
        const to = resultsPerPage * page
        return {from, to};
    }

    /**
     * type of ther search
     * @param event type selection change event in radio button
     */
    typeChange(event) {
        this.router.navigate(['/search'], { queryParams: { search: '', page: 1, type: event.target.value }, queryParamsHandling: 'merge' });
    }

}
