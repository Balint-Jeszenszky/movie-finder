import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Person } from '../models/Person';

@Injectable({
    providedIn: 'root'
})
export class FavouritePeopleService {
    private favourites: Person[];
    private favouritesSubject: ReplaySubject<Person[]>;
    private storageName: string = 'favourite-people';

    constructor() {
        this.favouritesSubject = new ReplaySubject<Person[]>(1);
        const favourites = JSON.parse(localStorage.getItem(this.storageName)) as Person[] | null;
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

    private isFavourite(person: Person): boolean {
        return !!this.favourites.find(p => p.id === person.id);
    }

    /**
     * get the stored favourite people
     * @returns an array of favourite people
     */
    getFavourites(): Observable<Person[]> {
        return this.favouritesSubject;
    }

    /**
     * adding a person to the favourites
     * @param person the person to save
     */
    addFavourite(person: Person) {
        if (!this.isFavourite(person)) {
            this.favourites.push(person);
            this.save();
        }
    }

    /**
     * remove a person from favourites
     * @param person the movie to person
     */
    removeFavourite(person: Person) {
        this.favourites = this.favourites.filter(p => p.id !== person.id);
        this.save();
    }
    
}
