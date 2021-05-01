interface MovieCredit {
    id: number;
    poster_path?: string;
    overview: string;
    title: string;
}

interface CastMovieCredit extends MovieCredit {
    character: string;
}

interface CrewMovieCredit extends MovieCredit {
    job: string;
}

/**
 * this interface contains the relevant fields for
 * a person's credit in movies and tv shows
 */
export interface PersonMovieCredits {
    cast: CastMovieCredit[];
    crew: CrewMovieCredit[];
}