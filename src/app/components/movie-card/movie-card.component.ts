import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
    @Input() movie: Movie;
    favourite: boolean;

    constructor() { }

    ngOnInit(): void {
    }

    setFavourite() {
        this.favourite = !this.favourite;
    }

}
