"use client"
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { Rating } from "next-rating-component";

//UI
import { Dialog } from "../UI";

//Apollo
import { useMutation } from "@apollo/client";
import { REPLY_REVIEW } from "@/Apollo/query/reviews/reviews";
import { GetReviewBySellerQuery } from "@/Apollo/types/graphql";

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
    item: GetReviewBySellerQuery["getReviewBySeller"]["results"][number]
}

const Details = ({ open, onClose, item }: Props) => {
    //State
    const [reply, setReply] = useState<string>(item.reply || "");

    //Apollo
    const [mutate, { loading }] = useMutation(REPLY_REVIEW, {
        onCompleted: (data) => {
            toast.success(data.replyReview.message);
            onClose();
        },
        onError: (error) => {
            toast.error(error.message);
        },
        refetchQueries: ["getReviewBySeller"],
        awaitRefetchQueries: true
    });

    //Handler
    const onSubmit = () => {
        mutate({ variables: { reviewReplyDto: { reply: reply, reviewId: item.id } } });
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="w-[900px] rounded-md"
        >
            <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-600">Review Details</h4>
                <hr className="mt-3" />
                <div className="mt-5 flex items-center gap-5">
                    <Image src={process.env.NEXT_PUBLIC_IMAGE_URL as string + item.product?.image} alt={item.product?.name || ""} width={300} height={450} className="w-[150px] rounded-md" />
                    <div>
                        <h4 className="text-2xl font-semibold text-gray-600">{item.product?.name}</h4>
                        <p className="mt-2">
                            <span className="text-gray-600 font-medium">Category:</span>{" "}
                            <span className="text-gray-600">{item.product?.category?.name}</span>
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Writer:</span>{" "}
                            {item.product?.writer ? <span className="text-gray-600">{item.product?.writer?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Publisher:</span>{" "}
                            {item.product?.publisher ? <span className="text-gray-600">{item.product?.publisher?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Teacher:</span>{" "}
                            {item.product?.teacher ? <span className="text-gray-600">{item.product?.teacher?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Institution:</span>{" "}
                            {item.product?.institution ? <span className="text-gray-600">{item.product?.institution?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                        <p className="mt-1.5">
                            <span className="text-gray-600 font-medium">Research paper:</span>{" "}
                            {item.product?.paper ? <span className="text-gray-600">{item.product?.paper?.name}</span> : <span className="font-light text-red-500">Not added</span>}
                        </p>
                    </div>
                </div>
                <div className="mt-6">
                    <Rating
                        value={item.rating}
                        size={28}
                        toolTip
                        readOnly
                    />
                    <p className="mt-4 font-light">{item.comment}</p>
                    <div className="ml-8 mt-4">
                        <h4 className="text-lg font-medium text-text">Add Reply</h4>
                        <textarea
                            placeholder="Add your reply"
                            className="w-full mt-2 border border-solid border-gray-200 px-3 rounded-md focus:outline-main py-2 resize-none"
                            rows={4}
                            onChange={(e) => setReply(e.target.value)}
                            value={reply}
                        />
                        <div className="mt-5">
                            <button className={`py-2.5 px-5 rounded-md text-sm font-semibold text-white relative bg-main`} disabled={loading} onClick={onSubmit}>
                                <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Update Reply</span>
                                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                    {loading &&
                                        <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin ml-auto"></div>
                                    }
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default Details;