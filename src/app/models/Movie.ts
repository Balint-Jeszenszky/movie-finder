export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path?: string;
    vote_average: number;
    release_date: Date;
}