import { Movie } from "./Movie";

/**
 * this interface contains the relevant fields for
 * a search result of movies
 */
export interface MovieSearchResult {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}