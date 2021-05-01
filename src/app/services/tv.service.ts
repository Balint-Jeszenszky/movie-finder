import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCredits } from '../models/MovieCredits';
import { TvDetails } from '../models/TvDetails';
import { TvSearchResult } from '../models/TvSearchResult';
import { apiKey } from './apiKey';
import { apiUrl } from './apiUrl';

@Injectable({
    providedIn: 'root'
})
export class TvService {

    constructor(private http: HttpClient) { }

    /**
     * search for tv shows by a query string
     * @param query the query string
     * @param page the results page number
     * @returns na observable of TvSearchResult
     */
    getTvBySearchString(query: string, page: number): Observable<TvSearchResult> {
        return this.http.get<TvSearchResult>(`${apiUrl}/search/tv?api_key=${apiKey}&query=${query}&page=${page}`);
    }

    /**
     * retrieve tv show by id
     * @param id the tv show's id
     * @returns an observable of TvDetails
     */
    getTvDetails(id: number): Observable<TvDetails> {
        return this.http.get<TvDetails>(`${apiUrl}/tv/${id}?api_key=${apiKey}`);
    }

    /**
     * retrieve tv show's credits by the tv show's id
     * @param id the tv show's id
     * @returns an observable of MovieCredits
     */
    getTvCredits(id: number): Observable<MovieCredits> {
        return this.http.get<MovieCredits>(`${apiUrl}/tv/${id}/credits?api_key=${apiKey}`);
    }

    /**
     * retrieve similar tv shows by the tv show's id
     * @param id the tv show's id
     * @returns an observable of TvSearchResult
     */
    getRecommendationsForTv(id: number): Observable<TvSearchResult> {
        return this.http.get<TvSearchResult>(`${apiUrl}/tv/${id}/recommendations?api_key=${apiKey}`);
    }
}
