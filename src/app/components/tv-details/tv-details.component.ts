import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCredits } from 'src/app/models/MovieCredits';
import { Tv } from 'src/app/models/Tv';
import { TvDetails } from 'src/app/models/TvDetails';
import { TvSearchResult } from 'src/app/models/TvSearchResult';
import { FavouriteTvsService } from 'src/app/services/favourite-tvs.service';
import { TvService } from 'src/app/services/tv.service';

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
        private tvService: TvService,
        private route: ActivatedRoute,
        private favouriteTvsService: FavouriteTvsService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const tvId = +params['id'];
            this.tvService.getTvDetails(tvId).subscribe(tv => {
                this.tv = tv;
                this.favouriteTvsService.getFavourites().subscribe(favourites => {
                    this.favourite = !!favourites.find(t => t.id === this.tv.id);
                });
            });
            this.tvService.getTvCredits(tvId).subscribe(credits => this.credits = credits);
            this.tvService.getRecommendationsForTv(tvId).subscribe(recommendations => this.recommendations = recommendations);
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
        if (this.favourite) {
            if (confirm(`Remove ${this.tv.name} from favourites?`)) {
                this.favouriteTvsService.removeFavourite(this.tv);
            }
        } else {
            this.favouriteTvsService.addFavourite(this.tv);
        }
    }

}
