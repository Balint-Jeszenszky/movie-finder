/**
 * this interface contains the relevant fields for
 * the objects in PeopleSearchReult's results array
 */
export interface Person {
    id: number,
    name: string,
    known_for_department: string,
    profile_path?: string
}
