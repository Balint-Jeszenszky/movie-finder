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

export interface PersonMovieCredits {
    cast: CastMovieCredit[];
    crew: CrewMovieCredit[];
}