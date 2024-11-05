"use client"

//UI
import { Loading } from "@/Components/UI";

//Dynamic
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@/Components/UI/RichTextEditor"), {
    ssr: false,
    loading: () => <div>
        <Loading />
        <p className="text-base font-light text-gray-500 mt-1">Please wait while we loading your description editor...</p>
    </div>
});

//Interface
interface Props {
    value: string | boolean;
    onChange: (value: string) => void;
}

const Description = ({ value, onChange }: Props) => {
    return (
        <div>
            <RichTextEditor
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Description;