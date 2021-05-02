import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Tv } from '../models/Tv';

@Injectable({
    providedIn: 'root'
})
export class FavouriteTvsService {
    private favourites: Tv[];
    private favouritesSubject: ReplaySubject<Tv[]>;
    private storageName: string = 'favourite-tvshows';

    constructor() {
        this.favouritesSubject = new ReplaySubject<Tv[]>(1);
        const favourites = JSON.parse(localStorage.getItem(this.storageName)) as Tv[] | null;
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

    private isFavourite(tv: Tv): boolean {
        return !!this.favourites.find(t => t.id === tv.id);
    }

    /**
     * get the stored favourite tv shows
     * @returns an array of favourite tv shows
     */
    getFavourites(): Observable<Tv[]> {
        return this.favouritesSubject;
    }

    /**
     * adding a tv show to the favourites
     * @param tv the tv show to save
     */
    addFavourite(tv: Tv) {
        if (!this.isFavourite(tv)) {
            this.favourites.push(tv);
            this.save();
        }
    }

    /**
     * remove a tv show from favourites
     * @param tv the tv show to remove
     */
    removeFavourite(tv: Tv) {
        this.favourites = this.favourites.filter(t => t.id !== tv.id);
        this.save();
    }

}
