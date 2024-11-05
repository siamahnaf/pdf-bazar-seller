import { gql } from "@/Apollo/types";

export const GET_SELLER_ORDER = gql(`
query getSellerOrders($searchDto: SearchDto!) {
  getSellerOrders(searchDto: $searchDto) {
    results {
      id
      orderId
      products {
        id
        name
        category {
          id
          name
        }
        writer {
          id
          name
        }
        teacher {
          id
          name
        }
        seller {
          id
          shop_name
        }
        total_price
        image
      }
      status
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