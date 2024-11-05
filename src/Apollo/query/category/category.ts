import { gql } from "@/Apollo/types";

export const CATEGORY_LIST = gql(`
query getCategories($searchDto: SearchDto!) {
  getCategories(searchDto: $searchDto) {
    results {
      id
      name
      icon
      slug
      position
      is_top
    }
    meta {
      itemCount
      totalItems
      itemsPerPage
      totalPages
      currentPage
    }
  }
}
`);