interface Cast {
    id: number;
    name: string;
    character: string;
    profile_path?: string;
}

interface Crew {
    id: number;
    name: string;
    job: string;
    profile_path?: string;
}

/**
 * this interface contains the relevant fields for
 * a movie's or tv show's credits
 */
export interface MovieCredits {
    id: number;
    cast: Cast[];
    crew: Crew[];
}