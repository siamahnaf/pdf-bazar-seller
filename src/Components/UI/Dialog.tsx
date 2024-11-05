"use client"
import { Fragment, ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";

//Interface
interface Props {
    className?: string;
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Dialog = ({ className, open, onClose, children }: Props) => {

    if (!open) return null;
    return (
        <Fragment>
            <div className={"fixed top-0 left-0 w-full h-full bg-black/40 z-[999999]"} onClick={onClose} />
            <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white max-h-[600px] overflow-auto z-[999999] ${className}`}>
                {children}
                <button className="absolute top-4 right-4 text-2xl text-gray-600" onClick={onClose}>
                    <IoCloseOutline />
                </button>
            </div>
        </Fragment>
    );
};

export default Dialog;