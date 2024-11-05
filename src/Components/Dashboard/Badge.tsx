"use client"
import { LuCheckCircle } from "react-icons/lu";
import { IoIosWarning } from "react-icons/io";

//Apollo
import { useSuspenseQuery } from "@apollo/client";
import { GET_PROFILE } from "@/Apollo/query/account/account";

const Badge = () => {
    const { data } = useSuspenseQuery(GET_PROFILE);

    if (!data.getProfile.seller?.need_review) {
        return (
            <div className="mt-6 w-max px-10 text-center border border-solid border-gray-200 py-5 rounded-md">
                <LuCheckCircle className="text-4xl mx-auto text-green-600" />
                <h5 className="text-green-600 font-semibold mt-1">Verified</h5>
            </div>
        )
    } else if (data.getProfile.seller?.need_review) {
        return (
            <div className="mt-6 w-max px-10 text-center border border-solid border-gray-200 py-5 rounded-md">
                <IoIosWarning className="text-4xl mx-auto text-red-600" />
                <h5 className="text-red-600 font-semibold mt-1">Under Review</h5>
            </div>
        )
    } else return null;
};

export default Badge;