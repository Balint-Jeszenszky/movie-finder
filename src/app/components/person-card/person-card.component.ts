import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { FavouritePeopleService } from 'src/app/services/favourite-people.service';

@Component({
    selector: 'app-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
    /**
     * the person that the card displays
     */
    @Input() person: Person;

    /**
     * boolean value showing if this person marked as a favourite
     */
    favourite: boolean;

    constructor(private favouritePeolpeService: FavouritePeopleService) { }

    ngOnInit(): void {
        this.favouritePeolpeService.getFavourites().subscribe(favourites => {
            this.favourite = !!favourites.find(p => p.id === this.person.id);
        });
    }

    /**
     * sets or resets the person as a favouirite if called
     */
    setFavourite() {
        if (this.favourite) {
            if (confirm(`Remove ${this.person.name} from favourites?`)) {
                this.favouritePeolpeService.removeFavourite(this.person);
            }
        } else {
            this.favouritePeolpeService.addFavourite(this.person);
        }
    }

}
