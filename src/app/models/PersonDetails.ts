/**
 * this interface contains the relevant fields for
 * a person's details
 */
export interface PersonDetails {
    id: number;
    birthday?: string;
    known_for_department: string;
    deathday?: string;
    name: string;
    also_known_as: string[];
    gender: number;
    biography: string;
    popularity: number;
    place_of_birth?: string;
    profile_path?: string;
}
