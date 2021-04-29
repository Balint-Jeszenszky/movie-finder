import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { PersonMovieCredits } from 'src/app/models/PersonMovieCredits';
import { MovieService } from 'src/app/services/movie.service';

@Component({
    selector: 'app-person-details',
    templateUrl: './person-details.component.html',
    styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
    person: Person;
    movieCredits: PersonMovieCredits;

    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const personId = +params['id'];
            this.movieService.getPersonDetails(personId).subscribe(person => this.person = person);
            this.movieService.getPersonMovies(personId).subscribe(movieCredits => this.movieCredits = movieCredits);
        });
    }

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

}
