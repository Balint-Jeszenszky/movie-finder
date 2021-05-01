import { Genre, SpokenLanguage } from "./MovieDetails";

interface Network {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path?: string;
    season_number: number;
}

/**
 * this interface contains the relevant fields for
 * a tv show's details
 */
export interface TvDetails {
    id: number;
    first_air_date: string;
    genres: Genre[];
    languages: string[];
    last_air_date: string;
    name: string;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    overview: string;
    poster_path?: string;
    seasons: Season[];
    original_language: string;
    spoken_languages: SpokenLanguage[];
    status: string;
    type: string;
    vote_average: number;
    vote_count: number;
}