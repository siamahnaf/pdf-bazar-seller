//UI
import { Wave } from "../UI";


//Apollo
import { query } from "@/Apollo/client";
import { GET_ANALYTICS } from "@/Apollo/query/analytics/analytic";

const Analytics = async () => {
    const { data } = await query({ query: GET_ANALYTICS });

    return (
        <div className="grid grid-cols-3 gap-7">
            <div className="bg-gradientOne rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">৳{data.getSellerAnalytics.totalIncome?.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h6>
                    <p className="text-base opacity-50">Total Income (Exclude Charge)</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientTwo rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">৳{data.getSellerAnalytics.totalIncomeWithoutCharge?.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h6>
                    <p className="text-base opacity-50">Total Income (Exclude Charge)</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientThree rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">৳{data.getSellerAnalytics.totalDue?.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h6>
                    <p className="text-base opacity-50">Current Due</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientFour rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">৳{data.getSellerAnalytics.totalWithdraw?.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h6>
                    <p className="text-base opacity-50">Total Withdrawal Amount</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientFive rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">{data.getSellerAnalytics.totalProduct}</h6>
                    <p className="text-base opacity-50">Total Books</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientSix rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">{data.getSellerAnalytics.totalSale}</h6>
                    <p className="text-base opacity-50">Total Sales</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientSeven rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">{data.getSellerAnalytics.totalOrder}</h6>
                    <p className="text-base opacity-50">Total Paid Order</p>
                </div>
                <Wave />
            </div>
            <div className="bg-gradientEight rounded-md">
                <div className="p-4 text-white">
                    <h6 className="text-4xl font-semibold mb-2">{data.getSellerAnalytics.totalReview}</h6>
                    <p className="text-base opacity-50">Total Published Review</p>
                </div>
                <Wave />
            </div>
        </div>
    );
};

export default Analytics;