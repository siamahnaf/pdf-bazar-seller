"use client"
import Image from "next/image";

//Apollo
import { useSuspenseQuery } from "@apollo/client";
import { GET_PROFILE } from "@/Apollo/query/account/account";

const Profile = () => {
    //Urql
    const { data } = useSuspenseQuery(GET_PROFILE);

    return (
        <div className="border-b border-solid border-gray-200 pb-4">
            {data.getProfile.seller?.banner ?
                <Image src={process.env.NEXT_PUBLIC_IMAGE_URL as string + data.getProfile.seller?.banner} alt={data?.getProfile.seller?.shop_name} width={1000} height={400} /> :
                <Image src="/banner.png" alt={data.getProfile.phone || "Seller"} width={1000} height={400} />
            }
            <div className="flex items-end gap-3 -mt-6 px-5">
                <div>
                    {data.getProfile.seller?.logo ?
                        <Image src={process.env.NEXT_PUBLIC_IMAGE_URL + data.getProfile.seller.logo} alt={data?.getProfile.seller.shop_name} width={300} height={300} className="border-2 border-solid border-main rounded-full w-[80px] h-[80px]" /> :
                        <Image src={"/avatar-book.png"} alt={data.getProfile.phone || "Seller"} width={300} height={300} className="border-2 border-solid border-main rounded-full w-[80px] h-[80px]" />
                    }
                </div>
                <div className="mb-2">
                    <h4 className="text-base font-bold">{data?.getProfile.seller?.shop_name}</h4>
                    <p className="text-sm">+88{data.getProfile.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;