"use client"
import { useState } from "react";

//Components
import PaymentMethod from "./PaymentMethod";
import WithdrawRequest from "./WithdrawRequest";

//Apollo
import { useSuspenseQuery } from "@apollo/client";
import { GET_ANALYTICS } from "@/Apollo/query/analytics/analytic";

const Statics = () => {
    //State
    const [open, setOpen] = useState<boolean>(false);
    const [request, setRequest] = useState<boolean>(false);

    //Apollo
    const { data } = useSuspenseQuery(GET_ANALYTICS, { errorPolicy: "all" });

    return (
        <div className="border border-solid border-gray-300 bg-main rounded px-6 py-8">
            <div className="grid grid-cols-4 gap-5">
                <div className="p-5 bg-white rounded-md">
                    <h3 className="text-3xl font-semibold mb-1">৳{Number.isInteger(data?.getSellerAnalytics.totalIncome) ? data?.getSellerAnalytics.totalIncome : data?.getSellerAnalytics.totalIncome?.toFixed(2)}</h3>
                    <p className="text-[15px] opacity-60 mb-px">Total Income</p>
                    <p className="text-[13px] opacity-60">(Exclude platform charge)</p>
                </div>
                <div className="p-5 bg-white rounded-md">
                    <h3 className="text-3xl font-semibold mb-1">৳{Number.isInteger(data?.getSellerAnalytics.totalIncomeWithoutCharge) ? data?.getSellerAnalytics.totalIncomeWithoutCharge : data?.getSellerAnalytics.totalIncomeWithoutCharge?.toFixed(2)}</h3>
                    <p className="text-[15px] opacity-60 mb-px">Total Income</p>
                    <p className="text-[13px] opacity-60">(Include platform charge)</p>
                </div>
                <div className="p-5 bg-white rounded-md">
                    <h3 className="text-3xl font-semibold mb-1">৳{Number.isInteger(data?.getSellerAnalytics.totalDue) ? data?.getSellerAnalytics.totalDue : data?.getSellerAnalytics.totalDue?.toFixed(2)}</h3>
                    <p className="text-[15px] opacity-60 mb-px">Current Due</p>
                    <p className="text-[13px] opacity-60">(Your total due)</p>
                </div>
                <div className="p-5 bg-white rounded-md">
                    <h3 className="text-3xl font-semibold mb-1">৳{Number.isInteger(data?.getSellerAnalytics.totalWithdraw) ? data?.getSellerAnalytics.totalWithdraw : data?.getSellerAnalytics.totalWithdraw?.toFixed(2)}</h3>
                    <p className="text-[15px] opacity-60 mb-px">Total Withdraw</p>
                    <p className="text-[13px] opacity-60">(Your total payment)</p>
                </div>
            </div>
            <div className="text-center flex justify-center gap-5 mt-10">
                <button className="bg-white py-3 px-4 text-sm text-text rounded-md" onClick={() => setOpen(true)}>
                    Update Payment Method
                </button>
                <button className="bg-white py-3 px-4 text-sm text-text rounded-md" onClick={() => setRequest(true)}>
                    Add Withdraw Request
                </button>
            </div>
            <PaymentMethod
                onClose={() => setOpen(false)}
                open={open}
            />
            <WithdrawRequest
                onClose={() => setRequest(false)}
                open={request}
            />
        </div>
    );
};

export default Statics;