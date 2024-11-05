import { gql } from "@/Apollo/types";

export const ADD_WITHDRAW = gql(`
mutation addWithdrawRequest($withdrawDto: WithdrawDto!) {
  addWithdrawRequest(withdrawDto: $withdrawDto) {
    message
  }
}
`);

export const CONFIRMED_WITHDRAW = gql(`
mutation confirmWithdraw($confirmPaymentId: Float!) {
  confirmPayment(id: $confirmPaymentId) {
    message
  }
}
`);

export const GET_WITHDRAW = gql(`
query getWithdrawBySeller($searchDto: SearchDto!) {
  getWithdrawBySeller(searchDto: $searchDto) {
    results {
      id
      amount
      released_by {
        id
        name
      }
      method
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
