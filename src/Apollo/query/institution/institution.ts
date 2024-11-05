import { gql } from "@/Apollo/types";

export const INSTITUTION_LIST = gql(`
query getInstitutions($searchDto: SearchDto!) {
  getInstitutions(searchDto: $searchDto) {
    results {
      id
      slug
      name
      image
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