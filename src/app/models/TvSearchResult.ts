import { Tv } from "./Tv";

export interface TvSearchResult {
    page: number;
    results: Tv[];
    total_pages: number;
    total_results: number;
}