import { gql } from "@/Apollo/types";

export const GET_REVIEWS = gql(`
query getReviewBySeller($searchDto: SearchDto!) {
  getReviewBySeller(searchDto: $searchDto) {
    results {
      id
      user {
        id
        name
        phone
        email
      }
      product {
        id
        name
        slug
        category {
          id
          name
        }
        writer {
          id
          name
        }
        image
        total_price
        publisher {
          id
          name
        }
        teacher {
          id
          name
        }
        institution {
          id
          name
        }
        paper {
          id
          name
        }
      }
      comment
      reply
      rating
      publish
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

export const REPLY_REVIEW = gql(`
mutation replyReview($reviewReplyDto: ReviewReplyDto!) {
  replyReview(reviewReplyDto: $reviewReplyDto) {
    message
  }
}
`);