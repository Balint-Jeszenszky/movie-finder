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

export interface MovieCredits {
    id: number;
    cast: Cast[];
    crew: Crew[];
}