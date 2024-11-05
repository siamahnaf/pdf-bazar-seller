import { gql } from "@/Apollo/types";

export const SALES_LIST = gql(`
query getSales($searchDto: SearchDto!) {
  getSales(searchDto: $searchDto) {
    results {
      id
      slug
      title
      image
      start_on
      expires_on
      discount
      discount_unit
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

export const RUNNING_SALES_LIST = gql(`
query getRunningSale($searchDto: SearchDto!) {
  getRunningSales(searchDto: $searchDto) {
    results {
      id
      slug
      title
      image
      start_on
      expires_on
      discount
      discount_unit
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
