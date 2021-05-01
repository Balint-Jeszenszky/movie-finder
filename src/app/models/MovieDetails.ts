/**
 * this interface contains the relevant fields for
 * movie and tv show's genre
 */
export interface Genre {
    id: number;
    name: string;
}

interface ProductionCompany {
    id: number;
    name: string;
    logo_path?: string;
    origin_country: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

/**
 * this interface contains the relevant fields for
 * movie and tv show's langguage
 */
export interface SpokenLanguage {
    iso_639_1: string;
    name: string;
}

/**
 * this interface contains the relevant fields for
 * movie's details
 */
export interface MovieDetails {
    id: number;
    title: string;
    overview?: string;
    poster_path?: string;
    backdrop_path?: string;
    release_date: string;
    genres: Genre[];
    original_language: string;
    popularity: number;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    spoken_languages: SpokenLanguage[];
    status: string;
    vote_average: number;
    vote_count: number;
}
