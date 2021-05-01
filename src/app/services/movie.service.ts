import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey } from './apiKey';
import { MovieSearchResult } from '../models/MovieSearchResult';
import { Observable } from 'rxjs';
import { MovieDetails } from '../models/MovieDetails';
import { MovieCredits } from '../models/MovieCredits';
import { PersonDetails } from '../models/PersonDetails';
import { PersonMovieCredits } from '../models/PersonMovieCredits';
import { PeopleSearchReult } from '../models/PeopleSearchResult';
import { TvSearchResult } from '../models/TvSearchResult';
import { TvDetails } from '../models/TvDetails';

/**
 * service for retrieving data from themoviedatabase
 * apikey should be set in separate file (./apiKey.ts)
 */
@Injectable({
    providedIn: 'root'
})
export class MovieService {
    apiUrl: string = 'https://api.themoviedb.org/3';

    constructor(private http: HttpClient) { }

    /**
     * retrieve popular movies
     * @param page the number of the page, if empty, default is 1
     * @returns an observable of MovieSearchResult
     */
    getPopularMovies(page?: number): Observable<MovieSearchResult> {
        return this.http.get<MovieSearchResult>(`${this.apiUrl}/movie/popular?api_key=${apiKey}&page=${page || 1}`);
    }

    /**
     * retrieve movie by id
     * @param id the movie's id
     * @returns an observable of MovieDetails
     */
    getMovieDetails(id: number): Observable<MovieDetails> {
        return this.http.get<MovieDetails>(`${this.apiUrl}/movie/${id}?api_key=${apiKey}`);
    }

    /**
     * retrieve movie credits by the movie's id
     * @param id the movie's id
     * @returns an observable of MovieCredits
     */
    getMovieCredits(id: number): Observable<MovieCredits> {
        return this.http.get<MovieCredits>(`${this.apiUrl}/movie/${id}/credits?api_key=${apiKey}`);
    }

    /**
     * retrieve similar movies by the movie's id
     * @param id the movie's id
     * @returns an observable of MovieSearchResult
     */
    getRecommendationsForMovie(id: number): Observable<MovieSearchResult> {
        return this.http.get<MovieSearchResult>(`${this.apiUrl}/movie/${id}/recommendations?api_key=${apiKey}`);
    }

    /**
     * retrieve a person's details by the person's id
     * @param id the person's id
     * @returns an observable of PersonDetails
     */
    getPersonDetails(id: number): Observable<PersonDetails> {
        return this.http.get<PersonDetails>(`${this.apiUrl}/person/${id}?api_key=${apiKey}`);
    }

    /**
     * retrieve a person's movie credits by the person's id
     * @param id the person's id
     * @returns an observable of PersonMovieCredits
     */
    getPersonMovies(id: number): Observable<PersonMovieCredits> {
        return this.http.get<PersonMovieCredits>(`${this.apiUrl}/person/${id}/movie_credits?api_key=${apiKey}`);
    }

    /**
     * search for movies by a query string
     * @param query the query string
     * @param page the results page number
     * @returns an observable of MovieSearchResult
     */
    getMoviesBySearchString(query: string, page: number): Observable<MovieSearchResult> {
        return this.http.get<MovieSearchResult>(`${this.apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`);
    }

    /**
     * search for people by a query string
     * @param query the query string
     * @param page the results page number
     * @returns an observable of PeopleSearchReult
     */
    getPeopleBySearchString(query: string, page: number): Observable<PeopleSearchReult> {
        return this.http.get<PeopleSearchReult>(`${this.apiUrl}/search/person?api_key=${apiKey}&query=${query}&page=${page}`);
    }

    /**
     * search for tv shows by a query string
     * @param query the query string
     * @param page the results page number
     * @returns na observable of TvSearchResult
     */
    getTvBySearchString(query: string, page: number): Observable<TvSearchResult> {
        return this.http.get<TvSearchResult>(`${this.apiUrl}/search/tv?api_key=${apiKey}&query=${query}&page=${page}`);
    }

    /**
     * retrieve tv show by id
     * @param id the tv show's id
     * @returns an observable of TvDetails
     */
    getTvDetails(id: number): Observable<TvDetails> {
        return this.http.get<TvDetails>(`${this.apiUrl}/tv/${id}?api_key=${apiKey}`);
    }

    /**
     * retrieve tv show's credits by the tv show's id
     * @param id the tv show's id
     * @returns an observable of MovieCredits
     */
    getTvCredits(id: number): Observable<MovieCredits> {
        return this.http.get<MovieCredits>(`${this.apiUrl}/tv/${id}/credits?api_key=${apiKey}`);
    }

    /**
     * retrieve similar tv shows by the tv show's id
     * @param id the tv show's id
     * @returns an observable of TvSearchResult
     */
    getRecommendationsForTv(id: number): Observable<TvSearchResult> {
        return this.http.get<TvSearchResult>(`${this.apiUrl}/tv/${id}/recommendations?api_key=${apiKey}`);
    }
}
