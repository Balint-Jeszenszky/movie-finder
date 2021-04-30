import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
    selector: 'app-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
    @Input() person: Person;
    favourite: boolean;

    constructor() { }

    ngOnInit(): void {
        const favourites = JSON.parse(localStorage.getItem('favourite-people')) as Person[] | null;
        this.favourite = !!favourites?.find(m => m.id === this.person.id);
    }

    setFavourite() {
        let favourites = JSON.parse(localStorage.getItem('favourite-people')) as Person[] | null || [];
        if (this.favourite) {
            favourites = favourites.filter(m => m.id !== this.person.id)
        } else {
            favourites.push(this.person);
        }
        this.favourite = !this.favourite;
        localStorage.setItem('favourite-people', JSON.stringify(favourites));
    }

}
