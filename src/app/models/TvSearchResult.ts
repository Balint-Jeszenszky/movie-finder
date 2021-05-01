import { Tv } from "./Tv";

/**
 * this interface contains the relevant fields for
 * a search result of tv shows
 */
export interface TvSearchResult {
    page: number;
    results: Tv[];
    total_pages: number;
    total_results: number;
}