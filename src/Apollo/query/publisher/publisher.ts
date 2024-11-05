import { gql } from "@/Apollo/types";

export const PUBLISHER_LIST = gql(`
query getPublishers($searchDto: SearchDto!) {
  getPublishers(searchDto: $searchDto) {
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