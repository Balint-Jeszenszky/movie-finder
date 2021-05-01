/**
 * this interface contains the relevant fields for
 * the objects in MovieSearchResult's results array 
 */
export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path?: string;
}
