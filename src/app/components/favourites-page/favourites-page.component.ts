import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
    selector: 'app-favourites-page',
    templateUrl: './favourites-page.component.html',
    styleUrls: ['./favourites-page.component.css']
})
export class FavouritesPageComponent implements OnInit {
    favourites: Movie[];

    constructor() { }

    ngOnInit(): void {
        this.favourites = JSON.parse(localStorage.getItem('favourites')) ;
    }

}
