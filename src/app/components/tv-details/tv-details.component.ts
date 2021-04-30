import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCredits } from 'src/app/models/MovieCredits';
import { TvDetails } from 'src/app/models/TvDetails';
import { TvSearchResult } from 'src/app/models/TvSearchResult';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-tv-details',
    templateUrl: './tv-details.component.html',
    styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
    tv: TvDetails;
    credits: MovieCredits;
    recommendations: TvSearchResult;

    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const tvId = +params['id'];
            this.movieService.getTvDetails(tvId).subscribe(tv => this.tv = tv);
            this.movieService.getTvCredits(tvId).subscribe(credits => this.credits = credits);
            this.movieService.getRecommendationsForTv(tvId).subscribe(recommendations => this.recommendations = recommendations);
        });
    }

    getSpokenLanguages(): string {
        return this.tv.spoken_languages.map(l => l.name).join(', ');
    }

    getGenres(): string {
        return this.tv.genres.map(g => g.name).join(', ');
    }

}
