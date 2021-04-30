import { Person } from "./Person";

export interface PeopleSearchReult {
    page: number;
    total_pages: number,
    total_results: number,
    results: Person[]
}
