"use client"
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

//UI
import { Input } from "../UI";

//UI
import { Dialog } from "../UI";

//Input Types
import { PaymentMethodInput } from "@/Utils/input.types";

//Apollo
import { useSuspenseQuery, useMutation } from "@apollo/client";
import { GET_PROFILE, UPDATE_METHOD } from "@/Apollo/query/account/account";

//Interface
interface Props {
    open: boolean;
    onClose: () => void;
}

const PaymentMethod = ({ open, onClose }: Props) => {
    //Apollo
    const { data } = useSuspenseQuery(GET_PROFILE, { errorPolicy: "all" });
    const [mutate, { loading }] = useMutation(UPDATE_METHOD, {
        onCompleted: (data) => {
            toast.success(data.addSellerPaymentMethod.message)
            onClose();
        },
        onError: (error) => {
            toast.error(error.message)
        },
        refetchQueries: ["getProfile"],
        awaitRefetchQueries: true
    });

    //Form Initializing
    const {
        register,
        handleSubmit,
        reset
    } = useForm<PaymentMethodInput>({
        defaultValues: {
            bank_name: data?.getProfile.seller?.method?.bank_name ?? "",
            acc_number: data?.getProfile.seller?.method?.acc_number ?? "",
            routing: data?.getProfile.seller?.method?.routing ?? "",
            branch: data?.getProfile.seller?.method?.branch ?? "",
            acc_holder_name: data?.getProfile.seller?.method?.acc_holder_name ?? "",
            nagad: data?.getProfile.seller?.method?.nagad ?? "",
            bkash: data?.getProfile.seller?.method?.bkash ?? "",
            upay: data?.getProfile.seller?.method?.upay ?? "",
            rocket: data?.getProfile.seller?.method?.rocket ?? ""
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<PaymentMethodInput> = (value) => {
        mutate({ variables: { methodDto: value } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            bank_name: data?.getProfile.seller?.method?.bank_name ?? "",
            acc_number: data?.getProfile.seller?.method?.acc_number ?? "",
            routing: data?.getProfile.seller?.method?.routing ?? "",
            branch: data?.getProfile.seller?.method?.branch ?? "",
            acc_holder_name: data?.getProfile.seller?.method?.acc_holder_name ?? "",
            nagad: data?.getProfile.seller?.method?.nagad ?? "",
            bkash: data?.getProfile.seller?.method?.bkash ?? "",
            upay: data?.getProfile.seller?.method?.upay ?? "",
            rocket: data?.getProfile.seller?.method?.rocket ?? ""
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

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
                    <div className="col-span-2">
                        <Input
                            label="Bank Name"
                            id="bankName"
                            placeholder="Bank Name"
                            {...register("bank_name")}
                        />
                        <Input
                            label="Account Number"
                            id="accNumber"
                            placeholder="Account Number"
                            {...register("acc_number")}
                        />
                        <Input
                            label="Branch"
                            id="branch"
                            placeholder="Branch"
                            {...register("branch")}
                        />
                        <Input
                            label="Routing"
                            id="routing"
                            placeholder="Routing"
                            {...register("routing")}
                        />
                        <Input
                            label="Account Holder Name"
                            id="accHolderName"
                            placeholder="Account Holder Name"
                            {...register("acc_holder_name")}
                        />
                        <Input
                            label="Bkash"
                            id="bkash"
                            placeholder="Bkash Number"
                            {...register("bkash")}
                        />
                        <Input
                            label="Nagad"
                            id="nagad"
                            placeholder="Nagad Number"
                            {...register("nagad")}
                        />
                        <Input
                            label="Upay"
                            id="upday"
                            placeholder="Upay Number"
                            {...register("upay")}
                        />
                        <Input
                            label="rocket"
                            id="rocket"
                            placeholder="Rocket Number"
                            {...register("rocket")}
                        />
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                            <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Method</span>
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

export default PaymentMethod;