import { Component, Input, OnInit } from '@angular/core';
import { Tv } from 'src/app/models/Tv';

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

    constructor() { }

    ngOnInit(): void {
        const favourites = JSON.parse(localStorage.getItem('favourite-tvshows')) as Tv[] | null;
        this.favourite = !!favourites?.find(t => t.id === this.tv.id);
    }

    /**
     * sets or resets the tv show as a favouirite if called
     */
    setFavourite() {
        let favourites = JSON.parse(localStorage.getItem('favourite-tvshows')) as Tv[] | null || [];
        if (this.favourite) {
            favourites = favourites.filter(m => m.id !== this.tv.id)
        } else {
            favourites.push(this.tv);
        }
        this.favourite = !this.favourite;
        localStorage.setItem('favourite-tvshows', JSON.stringify(favourites));
    }

}
