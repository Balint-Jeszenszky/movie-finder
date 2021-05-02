import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Movie } from '../models/Movie';

@Injectable({
    providedIn: 'root'
})
export class FavouriteMoviesService {
    private favourites: Movie[];
    private favouritesSubject: ReplaySubject<Movie[]>;
    private storageName: string = 'favourite-movies';

    constructor() {
        this.favouritesSubject = new ReplaySubject<Movie[]>(1);
        const favourites = JSON.parse(localStorage.getItem(this.storageName)) as Movie[] | null;
        if (!favourites) {
            this.favourites = [];
            this.save();
        } else {
            this.favourites = favourites;
        }
        this.favouritesSubject.next(this.favourites);
    }

    private save() {
        localStorage.setItem(this.storageName, JSON.stringify(this.favourites));
        this.favouritesSubject.next(this.favourites);
    }

    private isFavourite(movie: Movie): boolean {
        return !!this.favourites.find(m => m.id === movie.id);
    }

    /**
     * get the stored favourite movies
     * @returns an array of favourite movies
     */
    getFavourites(): Observable<Movie[]> {
        return this.favouritesSubject;
    }

    /**
     * adding a movie to the favourites
     * @param movie the movie to save
     */
    addFavourite(movie: Movie) {
        if (!this.isFavourite(movie)) {
            this.favourites.push(movie);
            this.save();
        }
    }

    /**
     * remove a movie from favourites
     * @param movie the movie to remove
     */
    removeFavourite(movie: Movie) {
        this.favourites = this.favourites.filter(m => m.id !== movie.id);
        this.save();
    }

}
