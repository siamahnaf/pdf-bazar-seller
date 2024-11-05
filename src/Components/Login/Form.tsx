"use client"
import { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";
import { Otptimer } from "otp-timer-ts";
import { useRouter } from "next-app-progress-bar";
import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//UI
import { Input, Loading } from "../UI";

//Apollo
import { useMutation } from "@apollo/client";
import { LOGIN_ACCOUNT, VERIFY_OTP, RESEND_OTP } from "@/Apollo/query/account/account";

//Interface
interface Inputs {
    phone: string;
    otp: string;
}

const Form = () => {
    //State
    const [send, setSend] = useState<boolean>(false);

    //Initializing Hook
    const router = useRouter();

    //Form
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm<Inputs>();

    //Apollo
    const [mutate, { loading }] = useMutation(LOGIN_ACCOUNT, {
        onCompleted: (data) => {
            toast.success(data.signup.message)
            setSend(true);
        },
        onError: (error) => {
            toast.error(error.message)
        }
    });
    const [verifyMutate, { loading: verifyLoading, client }] = useMutation(VERIFY_OTP, {
        onCompleted: (data) => {
            toast.success(data?.verifyPhone.message)
            setCookie("JYMXcZ3TpR81fbv2", data?.verifyPhone.token, {
                maxAge: 90 * 24 * 60 * 60,
                sameSite: "lax",
                path: "/"
            });
            const httpLink = new HttpLink({
                uri: process.env.NEXT_PUBLIC_API_URL,
                fetchOptions: { cache: "no-store" }
            });
            const authLink = setContext((_, { headers }) => {
                return {
                    headers: {
                        ...headers,
                        authorization: `Bearer ${data.verifyPhone.token}`,
                    },
                };
            });
            client.setLink(authLink.concat(httpLink));
            router.push("/");
        },
        onError: (error) => {
            toast.error(error.message)
        }
    });
    const [resendOtp, { loading: resendLoading }] = useMutation(RESEND_OTP, {
        onCompleted: (data) => {
            toast.success(data.resendOtp.message);
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    //Handler
    const onSubmit: SubmitHandler<Inputs> = (value) => {
        if (!send) {
            mutate({
                variables: {
                    signupInput: {
                        phone: value.phone, as: ["seller"]
                    }
                }
            });
        } else {
            verifyMutate({
                variables: {
                    verifyPhoneInput: {
                        phone: value.phone, otp: value.otp
                    }
                }
            });
        }
    };

    //Handler
    const handleResend = () => {
        resendOtp({ variables: { phone: getValues().phone } });
    }

    return (
        <div className="w-[35%] mx-auto shadow-3xl border border-solid border-gray-300 rounded-lg p-8">
            <div className="text-center">
                <h4 className="text-lg font-semibold">PDF Shop</h4>
                <p className="text-sm text-gray-600 italic">Login to seller dashboard</p>
            </div>
            <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <div>
                        <Input
                            label="Phone"
                            id="phone"
                            {...register("phone", { required: 'Please give your phone number' })}
                            error={errors.phone ? true : false}
                            message={errors.phone?.message}
                            prefixElement={<p className="absolute top-[2px] left-[2px] bottom-[2px] bg-gray-100 px-4 rounded-s-md flex items-center justify-center text-text text-base">+88</p>}
                            className="pl-[70px]"
                            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '')
                            }}
                        />
                    </div>
                    {send &&
                        <div>
                            <Input
                                label="OTP"
                                id="otp"
                                placeholder="Your OTP"
                                {...register("otp", { required: 'Provide the code sent to you.' })}
                                error={errors.otp ? true : false}
                                message={errors.otp?.message}
                                onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
                                }}
                            />
                        </div>
                    }
                    {send &&
                        <Otptimer
                            minutes={1}
                            seconds={30}
                            onResend={handleResend}
                            text="Resend code in"
                            buttonText="Resend Code"
                            textClass="font-light text-text"
                            timerClass="font-light text-text"
                            buttonClass="underline text-main flex items-center gap-3"
                            showSpinner
                            fetching={resendLoading}
                            spinnerComponent={<Loading size={20} />}
                        />
                    }
                </div>
                <div className="mt-5">
                    <button className="bg-main w-full uppercase font-semibold py-3 text-white rounded-md text-sm relative" type="submit" disabled={(loading || verifyLoading)}>
                        <span className={`${(loading || verifyLoading) && "opacity-20"}`}>{!send ? "Send Code" : "Verify Code"}</span>
                        {(loading || verifyLoading) && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Loading color="stroke-white" />
                        </div>}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;