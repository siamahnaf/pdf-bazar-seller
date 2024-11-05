import { gql } from "@/Apollo/types";

export const TEACHER_LIST = gql(`
query getTeachers($searchDto: SearchDto!) {
  getTeachers(searchDto: $searchDto) {
    results {
      id
      slug
      name
      description
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