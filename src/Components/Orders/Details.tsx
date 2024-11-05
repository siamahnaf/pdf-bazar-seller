"use client"
import { Fragment } from "react";

//UI
import { Dialog } from "../UI";

//Apollo
import { GetSellerOrdersQuery } from "@/Apollo/types/graphql";

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
    item: GetSellerOrdersQuery["getSellerOrders"]["results"][number];
}

const Details = ({ open, onClose, item }: Props) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="w-[900px] rounded-md"
        >
            <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-600">Order Details ({item.orderId})</h4>
                <hr className="mt-3" />
                <div className="py-3 px-2">
                    <h6 className="text-lg font-medium mb-2">Books</h6>
                    {item.products?.map((item, i) => (
                        <Fragment key={i}>
                            <div className="flex gap-5 py-2">
                                <h2 className="flex-1 text-base font-light">
                                    <span>{i + 1}. </span>
                                    <span>{item.name}</span>
                                </h2>
                                <h2 className="font-medium">
                                    Tk. {item.total_price}
                                </h2>
                            </div>
                            <hr />
                        </Fragment>
                    ))}
                    <div className="flex gap-5 py-2">
                        <h4 className="flex-1">Total</h4>
                        <h4>Tk. {item.products?.reduce((sum, item) => sum + item.total_price, 0)}</h4>
                    </div>
                    <hr />
                    <div className="flex gap-5 py-2">
                        <h4 className="flex-1 text-lg font-medium text-gray-600">Total Amount Paid</h4>
                        <h4 className="text-lg font-medium text-main">Tk. {item.products?.reduce((sum, item) => sum + item.total_price, 0)}</h4>
                    </div>
                    <div>
                        <h6 className="mt-5 text-lg font-medium mb-2">Payment Information</h6>
                        <div className="flex gap-2">
                            <p className="text-gray-700 font-semibold">Status:</p>
                            <p className={`capitalize font-bold ${item.status === "placed" ? "text-red-600" : (item.status === "confirmed" ? "text-purple-600" : "text-green-600")}`}>{item.status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default Details;