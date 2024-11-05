import { gql } from "@/Apollo/types";

export const GET_ANALYTICS = gql(`
query getAnalytics {
  getSellerAnalytics {
    totalIncome
    totalIncomeWithoutCharge
    totalDue
    totalWithdraw
    totalProduct
    totalSale
    totalOrder
    totalReview
  }
}
`);