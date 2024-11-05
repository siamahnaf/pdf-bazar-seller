"use client"
import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import toast from "react-hot-toast";

//Components
import { Input, Textarea, ImageUploader } from "@/Components/UI";

//Input Types
import { UpdateSellerInput } from "@/Utils/input.types";

//Apollo
import { useMutation, useSuspenseQuery } from "@apollo/client";
import { UPDATE_SELLER, GET_PROFILE } from "@/Apollo/query/account/account";

const Add = () => {
    //Apollo
    const { data } = useSuspenseQuery(GET_PROFILE);
    const [mutate, { loading }] = useMutation(UPDATE_SELLER, {
        onCompleted: (data) => {
            toast.success(data.updateSeller.message)
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
        formState: { errors },
        control,
        reset
    } = useForm<UpdateSellerInput>({
        defaultValues: {
            shop_name: data.getProfile.seller?.shop_name,
            address: data.getProfile.seller?.address,
            contact_number: data.getProfile.seller?.contact_number,
            logo: data.getProfile.seller?.logo || "",
            banner: data.getProfile.seller?.banner || "",
        }
    });

    //On Submit
    const onSubmit: SubmitHandler<UpdateSellerInput> = (value) => {
        mutate({ variables: { updateSellerDto: value } });
    }

    //Lifecycle Hook
    useEffect(() => {
        reset({
            shop_name: data.getProfile.seller?.shop_name,
            address: data.getProfile.seller?.address,
            contact_number: data.getProfile.seller?.contact_number,
            logo: data.getProfile.seller?.logo || "",
            banner: data.getProfile.seller?.banner || "",
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div>
            <h4 className="text-2xl font-semibold text-gray-600">Update Settings</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-3 gap-8 mt-6">
                    <div className="col-span-2">
                        <Input
                            label="Shop Name"
                            id="shopName"
                            placeholder="Shop name"
                            {...register("shop_name", {
                                required: "Shop name is required",
                                pattern: {
                                    value: /^[A-Za-z0-9\s]+$/,
                                    message: "Shop name must contain only English letters"
                                }
                            })}
                            error={errors.shop_name ? true : false}
                            message={errors.shop_name?.message}
                        />
                        <Textarea
                            label="Address"
                            id="address"
                            placeholder="Address"
                            {...register("address", { required: "Address is required" })}
                            rows={4}
                            error={errors.address ? true : false}
                            message={errors.address?.message}
                        />
                        <Input
                            label="Contact number"
                            id="contactNumber"
                            placeholder="Contact number"
                            {...register("contact_number", { required: "Contact number is required" })}
                            error={errors.contact_number ? true : false}
                            message={errors.contact_number?.message}
                        />
                        <Controller
                            control={control}
                            name="banner"
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="Shop Banner"
                                    sub="Add or change image for the banner"
                                    width={1000}
                                    height={400}
                                    onChange={onChange}
                                    value={value}
                                    folderName="settings"
                                    previewClass="w-full"
                                />
                            )}
                        />
                    </div>
                    <div className="col-span-1">
                        <Controller
                            control={control}
                            name="logo"
                            render={({ field: { onChange, value } }) => (
                                <ImageUploader
                                    label="Logo Image"
                                    sub="Add or change image for the shop logo"
                                    width={600}
                                    height={600}
                                    onChange={onChange}
                                    value={value}
                                    folderName="settings"
                                    previewClass="w-[60%]"
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="py-2.5 px-4 rounded-md text-sm font-semibold bg-main text-white relative" disabled={loading}>
                        <span className={`${loading ? "opacity-40" : "opacity-100"}`}>Save Settings</span>
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                            {loading &&
                                <div className="w-4 h-4 border-b-2 border-white rounded-full animate-spin ml-auto"></div>
                            }
                        </div>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add;