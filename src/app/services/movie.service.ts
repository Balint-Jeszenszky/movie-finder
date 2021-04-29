import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiKey } from './apiKey';
import { MovieSearchResult } from '../models/MovieSearchResult';
import { Observable } from 'rxjs';
import { MovieDetails } from '../models/MovieDetails';
import { MovieCredits } from '../models/MovieCredits';
import { Person } from '../models/Person';
import { PersonMovieCredits } from '../models/PersonMovieCredits';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    apiUrl: string = 'https://api.themoviedb.org/3';

    constructor(private http: HttpClient) { }

    getPopularMovies(page?: number): Observable<MovieSearchResult> {
        return this.http.get<MovieSearchResult>(`${this.apiUrl}/movie/popular?api_key=${apiKey}&page=${page || 1}`);
    }

    getMovieDetails(id: number): Observable<MovieDetails> {
        return this.http.get<MovieDetails>(`${this.apiUrl}/movie/${id}?api_key=${apiKey}`);
    }

    getMovieCredits(id: number): Observable<MovieCredits> {
        return this.http.get<MovieCredits>(`${this.apiUrl}/movie/${id}/credits?api_key=${apiKey}`);
    }

    getRecommendationsForMovie(id: number): Observable<MovieSearchResult> {
        return this.http.get<MovieSearchResult>(`${this.apiUrl}/movie/${id}/recommendations?api_key=${apiKey}`);
    }

    getPersonDetails(id: number): Observable<Person> {
        return this.http.get<Person>(`${this.apiUrl}/person/${id}?api_key=${apiKey}`);
    }

    getPersonMovies(id: number): Observable<PersonMovieCredits> {
        return this.http.get<PersonMovieCredits>(`${this.apiUrl}/person/${id}/movie_credits?api_key=${apiKey}`);
    }
}
