/**
 * this interface contains the relevant fields for
 * the objects in TvSearchResult's results array 
 */
export interface Tv {
    id: number;
    name: string;
    overview: string;
    poster_path?: string;
}
