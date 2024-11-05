"use client"
import { Fragment } from "react";
import toast from "react-hot-toast";

//UI
import { Dialog, Loading } from "../UI";

//Apollo
import { useMutation } from "@apollo/client";
import { CONFIRMED_WITHDRAW } from "@/Apollo/query/withdraw/withdraw";
import { GetWithdrawBySellerQuery } from "@/Apollo/types/graphql";

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
    item: GetWithdrawBySellerQuery["getWithdrawBySeller"]["results"][number];
}

const Details = ({ open, onClose, item }: Props) => {
    //Apollo
    const [mutate, { loading }] = useMutation(CONFIRMED_WITHDRAW, {
        onCompleted: (data) => {
            toast.success(data.confirmPayment.message)
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getWithdrawBySeller", "getAnalytics"],
        awaitRefetchQueries: true
    });


    //Handler
    const onConfirm = () => {
        mutate({ variables: { confirmPaymentId: item.id } });
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="w-[500px] rounded-md"
        >
            <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-600">Withdraw Details</h4>
                <hr className="mt-3" />
                <div className="py-3 px-2 text-center mt-4 mb-4">
                    <h4 className="text-4xl font-semibold mb-1">Tk. {item.amount}</h4>
                    <p className="font-light text-gray-500">(By {item.method})</p>
                    {item.released_by &&
                        <p className="text-base mb-2 font-light text-gray-800 mt-4">Payment released by {item.released_by.name}</p>
                    }
                    {item.status === "Released" &&
                        <Fragment>
                            <p className="text-purple-600 mt-10">Are you received the payment?</p>
                            <button className="mt-4 relative bg-green-600 text-white px-5 py-2 rounded-md" disabled={loading} onClick={onConfirm}>
                                <span className={`${loading && "opacity-20"}`}>Yes I received</span>
                                {loading &&
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <Loading color="stroke-white" />
                                    </div>
                                }
                            </button>
                        </Fragment>
                    }
                    {item.status === "Pending" &&
                        <p className="text-base font-medium text-yellow-400 mt-4">Payment is Pending, please <br /> wait for admin approval!</p>
                    }
                    {item.status === "Rejected" &&
                        <p className="text-base font-medium text-red-600 mt-4">Your payment request is rejected!</p>
                    }
                    {item.status === "Confirmed" &&
                        <p className="text-base font-medium text-green-600 mt-4">You confirmed that <br /> you get the payment</p>
                    }
                </div>
            </div>
        </Dialog>
    );
};

export default Details;