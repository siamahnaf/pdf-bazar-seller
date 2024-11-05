import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { PiShieldWarningBold } from "react-icons/pi";

//Interface
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: boolean;
    message?: string;
    id: string;
    prefixElement?: ReactNode;
    className?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ label, error = false, message = "", id, prefixElement, className, ...rest }, ref) => {
    return (
        <div className={`${error ? "mb-2" : "mb-0"}`}>
            <label htmlFor={id} className="font-semibold text-gray-500 mb-2 block text-[15px]">{label}</label>
            <div className="relative">
                <input
                    id={id}
                    ref={ref}
                    className={`border border-solid rounded-md px-3 py-2.5 w-full text-base text-gray-700 ${error ? "border-red-600 focus:outline-red-600" : "border-gray-300 focus:outline-main"} ${className}`}
                    {...rest}
                />
                {prefixElement ?? ""}
            </div>
            <p className={`text-sm text-red-600 mt-1 flex items-center gap-1 transition-all ${error ? "opacity-100 visible -translate-y-0" : "opacity-0 invisible -translate-y-1"}`}>
                <PiShieldWarningBold className="text-base -mt-[2px]" />
                <span>{message}</span>
            </p>
        </div>
    );
});

export default Input;

Input.displayName = "Input"