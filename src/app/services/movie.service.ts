import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey } from './apiKey';
import { MovieSearchResult } from '../models/MovieSearchResult';
import { Observable } from 'rxjs';
import { MovieDetails } from '../models/MovieDetails';
import { MovieCredits } from '../models/MovieCredits';
import { apiUrl } from './apiUrl';

/**
 * service for retrieving data from themoviedatabase
 * apikey should be set in separate file (./apiKey.ts)
 */
@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient) { }

    /**
     * retrieve popular movies
     * @param page the number of the page, if empty, default is 1
     * @returns an observable of MovieSearchResult
     */
    getPopularMovies(page?: number): Observable<MovieSearchResult> {
        return this.http.get<MovieSearchResult>(`${apiUrl}/movie/popular?api_key=${apiKey}&page=${page || 1}`);
    }

    /**
     * retrieve movie by id
     * @param id the movie's id
     * @returns an observable of MovieDetails
     */
    getMovieDetails(id: number): Observable<MovieDetails> {
        return this.http.get<MovieDetails>(`${apiUrl}/movie/${id}?api_key=${apiKey}`);
    }

    /**
     * retrieve movie credits by the movie's id
     * @param id the movie's id
     * @returns an observable of MovieCredits
     */
    getMovieCredits(id: number): Observable<MovieCredits> {
        return this.http.get<MovieCredits>(`${apiUrl}/movie/${id}/credits?api_key=${apiKey}`);
    }

    /**
     * retrieve similar movies by the movie's id
     * @param id the movie's id
     * @returns an observable of MovieSearchResult
     */
    getRecommendationsForMovie(id: number): Observable<MovieSearchResult> {
        return this.http.get<MovieSearchResult>(`${apiUrl}/movie/${id}/recommendations?api_key=${apiKey}`);
    }

    /**
     * search for movies by a query string
     * @param query the query string
     * @param page the results page number
     * @returns an observable of MovieSearchResult
     */
    getMoviesBySearchString(query: string, page: number): Observable<MovieSearchResult> {
        return this.http.get<MovieSearchResult>(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`);
    }
    
}
