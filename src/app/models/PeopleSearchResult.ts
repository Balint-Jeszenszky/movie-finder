import { Person } from "./Person";

/**
 * this interface contains the relevant fields for
 * a search result of people
 */
export interface PeopleSearchReult {
    page: number;
    total_pages: number,
    total_results: number,
    results: Person[]
}
