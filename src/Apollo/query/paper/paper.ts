import { gql } from "@/Apollo/types";


export const PAPER_LIST = gql(`
query getPapers($searchDto: SearchDto!) {
  getPapers(searchDto: $searchDto) {
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