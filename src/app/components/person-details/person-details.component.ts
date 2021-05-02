import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { PersonDetails } from 'src/app/models/PersonDetails';
import { PersonMovieCredits } from 'src/app/models/PersonMovieCredits';
import { FavouritePeopleService } from 'src/app/services/favourite-people.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
    selector: 'app-person-details',
    templateUrl: './person-details.component.html',
    styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
    /**
     * the person that the page displays
     */
    person: PersonDetails;

    /**
     * boolean value showing if this person marked as a favourite
     */
    favourite: boolean;

    /**
     * movie credits for this person
     */
    movieCredits: PersonMovieCredits;

    constructor(
        private personService: PersonService,
        private route: ActivatedRoute,
        private favouritePeolpeService: FavouritePeopleService
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const personId = +params['id'];
            this.personService.getPersonDetails(personId).subscribe(person => {
                this.person = person;
                this.favouritePeolpeService.getFavourites().subscribe(favourites => {
                    this.favourite = !!favourites.find(p => p.id === this.person.id);
                });
            });
            this.personService.getPersonMovies(personId).subscribe(movieCredits => this.movieCredits = movieCredits);
        });
    }

    /**
     * person's gender converted from the number to string representation
     * @returns the person's gender as a string
     */
    getGender() {
        switch (this.person.gender) {
            case 0:
                return 'Not specified';
            case 1:
                return 'Female';
            case 2:
                return 'Male';
            case 3:
                return 'Non-binary';
        }
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
