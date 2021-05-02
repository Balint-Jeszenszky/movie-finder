import { Component, Input, OnInit } from '@angular/core';
import { Tv } from 'src/app/models/Tv';
import { FavouriteTvsService } from 'src/app/services/favourite-tvs.service';

@Component({
    selector: 'app-tv-card',
    templateUrl: './tv-card.component.html',
    styleUrls: ['./tv-card.component.css']
})
export class TvCardComponent implements OnInit {
    /**
     * the tv show that the card displays
     */
    @Input() tv: Tv;

    /**
     * boolean value showing if this tv show marked as a favourite
     */
    favourite: boolean;

    constructor(private favouriteTvsService: FavouriteTvsService) { }

    ngOnInit(): void {
        this.favouriteTvsService.getFavourites().subscribe(favourites => {
            this.favourite = !!favourites.find(t => t.id === this.tv.id);
        });
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
