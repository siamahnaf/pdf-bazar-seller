"use client"
import { ChangeEvent } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";

//UI
import { Input } from "../UI";

//UI
import { Dialog, Select } from "../UI";

//Input Types
import { WithdrawInput } from "@/Utils/input.types";

//Apollo
import { useSuspenseQuery, useMutation } from "@apollo/client";
import { GET_ANALYTICS } from "@/Apollo/query/analytics/analytic";
import { ADD_WITHDRAW } from "@/Apollo/query/withdraw/withdraw";

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
}

const WithdrawRequest = ({ open, onClose }: Props) => {
    //Form Initializing
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control
    } = useForm<WithdrawInput>();


    //Apollo
    const { data } = useSuspenseQuery(GET_ANALYTICS, { errorPolicy: "all" });
    const [mutate, { loading }] = useMutation(ADD_WITHDRAW, {
        onCompleted: (data) => {
            toast.success(data.addWithdrawRequest.message);
            reset();
            onClose();
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getAnalytics", "getWithdrawBySeller"],
        awaitRefetchQueries: true
    });

    //On Submit
    const onSubmit: SubmitHandler<WithdrawInput> = (value) => {
        mutate({ variables: { withdrawDto: { amount: Number(value.amount), method: value.method } } });
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="w-[600px] rounded-md"
        >
            <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-600">Add/Update your payment method</h4>
                <hr className="mt-3" />
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                    <div className="border border-solid border-gray-200 px-5 py-8 text-center w-[70%] mx-auto rounded-md mb-6">
                        <h4 className="text-4xl text-text">TK. {data?.getSellerAnalytics.totalDue?.toFixed(2)}</h4>
                        <h4 className="text-2xl text-text mt-2">TK. {Math.max(Number(data?.getSellerAnalytics.totalDue) - 5000, 0).toFixed(2)}
                        </h4>
                        <p className="text-sm font-light my-3">(Withdraw Amount)</p>
                        <p className="text-sm font-light italic">We keep 5000 taka in your account for security safety</p>
                    </div>
                    <Input
                        label="Type your amount"
                        id="amount"
                        placeholder="Amount"
                        {...register("amount", {
                            required: "Amount is required",
                            validate: (value) => {
                                const numericValue = parseInt(value, 10);
                                if (isNaN(numericValue)) {
                                    return "Invalid amount";
                                }
                                if (numericValue > (Number(data?.getSellerAnalytics.totalDue) - 5000)) {
                                    return `Amount cannot exceed ${(Math.max(Number(data?.getSellerAnalytics.totalDue) - 5000, 0)).toFixed(2)} tk`;
                                }
                                return true;
                            },
                        })}
                        error={errors.amount ? true : false}
                        message={errors.amount?.message}
                        onInput={(e: ChangeEvent<HTMLInputElement>) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '')
                        }}
                    />
                    <Controller
                        control={control}
                        name="method"
                        rules={{ required: "Payment method is required" }}
                        render={({ field: { value, onChange } }) => (
                            <Select
                                id="Method"
                                label="Select payment method"
                                placeholder="Payment method"
                                value={value}
                                onChange={onChange}
                                options={[
                                    { value: "Bank", label: "Bank" },
                                    { value: "Bkash", label: "Bkash" },
                                    { value: "Nagad", label: "Nagad" },
                                    { value: "Upay", label: "Upay" },
                                    { value: "Rocket", label: "Rocket" }
                                ]}
                            />
                        )}
                    />
                    <div className="mt-4">
                        <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                            <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Place Request</span>
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                {loading &&
                                    <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin ml-auto"></div>
                                }
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </Dialog>
    );
};

export default WithdrawRequest;