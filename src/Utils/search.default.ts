export const defaultSearch = {
    search: "",
    limit: 15,
    page: 1
}
export interface SearchInput {
    search: string;
    page: number;
    limit: number;
}