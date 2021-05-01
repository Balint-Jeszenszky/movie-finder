import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { PersonDetails } from 'src/app/models/PersonDetails';
import { PersonMovieCredits } from 'src/app/models/PersonMovieCredits';
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
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const personId = +params['id'];
            this.personService.getPersonDetails(personId).subscribe(person => {
                this.person = person;
                const favourites = JSON.parse(localStorage.getItem('favourite-people')) as Person[] | null;
                this.favourite = !!favourites?.find(m => m.id === this.person.id);
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
        let favourites = JSON.parse(localStorage.getItem('favourite-movies')) as Person[] | null || [];
        if (this.favourite) {
            favourites = favourites.filter(m => m.id !== this.person.id)
        } else {
            favourites.push({
                id: this.person.id,
                name: this.person.name,
                known_for_department: this.person.known_for_department,
                profile_path: this.person.profile_path
            });
        }
        this.favourite = !this.favourite;
        localStorage.setItem('favourite-movies', JSON.stringify(favourites));
    }

}
