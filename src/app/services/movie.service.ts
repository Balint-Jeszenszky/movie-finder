import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiKey } from './apiKey';
import { MovieSearchResult } from '../models/MovieSearchResult';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    apiUrl: string = 'https://api.themoviedb.org/3';

    constructor(private http: HttpClient) { }

    getPopularMovies(page?: number): Observable<MovieSearchResult> {
        return this.http.get<MovieSearchResult>(`${this.apiUrl}/movie/popular?api_key=${apiKey}&page=${page || 1}`);
    }
}
