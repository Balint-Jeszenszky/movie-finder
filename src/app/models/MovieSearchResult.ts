import { Movie } from "./Movie";

export interface MovieSearchResult {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}