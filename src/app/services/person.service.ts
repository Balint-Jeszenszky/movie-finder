import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleSearchReult } from '../models/PeopleSearchResult';
import { PersonDetails } from '../models/PersonDetails';
import { PersonMovieCredits } from '../models/PersonMovieCredits';
import { apiKey } from './apiKey';
import { apiUrl } from './apiUrl';

@Injectable({
    providedIn: 'root'
})
export class PersonService {

    constructor(private http: HttpClient) { }

    /**
     * retrieve a person's details by the person's id
     * @param id the person's id
     * @returns an observable of PersonDetails
     */
     getPersonDetails(id: number): Observable<PersonDetails> {
        return this.http.get<PersonDetails>(`${apiUrl}/person/${id}?api_key=${apiKey}`);
    }

    /**
     * retrieve a person's movie credits by the person's id
     * @param id the person's id
     * @returns an observable of PersonMovieCredits
     */
    getPersonMovies(id: number): Observable<PersonMovieCredits> {
        return this.http.get<PersonMovieCredits>(`${apiUrl}/person/${id}/movie_credits?api_key=${apiKey}`);
    }

    /**
     * search for people by a query string
     * @param query the query string
     * @param page the results page number
     * @returns an observable of PeopleSearchReult
     */
    getPeopleBySearchString(query: string, page: number): Observable<PeopleSearchReult> {
        return this.http.get<PeopleSearchReult>(`${apiUrl}/search/person?api_key=${apiKey}&query=${query}&page=${page}`);
    }

}
