import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCredits } from 'src/app/models/MovieCredits';
import { Tv } from 'src/app/models/Tv';
import { TvDetails } from 'src/app/models/TvDetails';
import { TvSearchResult } from 'src/app/models/TvSearchResult';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-tv-details',
    templateUrl: './tv-details.component.html',
    styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
    /**
     * the tv show that the page displays
     */
    tv: TvDetails;

    /**
     * boolean value showing if this tv show marked as a favourite
     */
    favourite: boolean;

    /**
     * credits for this tv show
     */
    credits: MovieCredits;

    /**
     * recommended similar tv shows
     */
    recommendations: TvSearchResult;

    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const tvId = +params['id'];
            this.movieService.getTvDetails(tvId).subscribe(tv => {
                this.tv = tv;
                const favourites = JSON.parse(localStorage.getItem('favourite-tvshows')) as Tv[] | null;
                this.favourite = !!favourites?.find(m => m.id === this.tv.id);
            });
            this.movieService.getTvCredits(tvId).subscribe(credits => this.credits = credits);
            this.movieService.getRecommendationsForTv(tvId).subscribe(recommendations => this.recommendations = recommendations);
        });
    }

    /**
     * all spoken language concatenated as a string with a comma and a space
     * @returns a string of the tv show's all spoken languages
     */
    getSpokenLanguages(): string {
        return this.tv.spoken_languages.map(l => l.name).join(', ');
    }

    /**
     * all genres concatenated as a string with a comma and a space
     * @returns a string of the tv show's all genres
     */
    getGenres(): string {
        return this.tv.genres.map(g => g.name).join(', ');
    }

    /**
     * sets or resets the tv show as a favouirite if called
     */
    setFavourite() {
        let favourites = JSON.parse(localStorage.getItem('favourite-tvshows')) as Tv[] | null || [];
        if (this.favourite) {
            favourites = favourites.filter(m => m.id !== this.tv.id)
        } else {
            favourites.push({
                id: this.tv.id,
                name: this.tv.name,
                overview: this.tv.overview,
                poster_path: this.tv.poster_path
            });
        }
        this.favourite = !this.favourite;
        localStorage.setItem('favourite-tvshows', JSON.stringify(favourites));
    }

}
