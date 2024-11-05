import { gql } from "@/Apollo/types";

export const WRITER_LIST = gql(`
query getWriters($searchDto: SearchDto!) {
  getWriters(searchDto: $searchDto) {
    results {
      id
      slug
      name
      image
      level
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