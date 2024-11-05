import { TextareaHTMLAttributes, forwardRef } from "react";

//Interface
interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: boolean;
    message?: string;
    id: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ label, error = false, message = "", id, ...props }, ref) => {
    return (
        <div className={`${error ? "mb-2" : "mb-0"}`}>
            <label htmlFor={id} className="font-semibold text-gray-500 mb-2 block text-[15px]">{label}</label>
            <div className="relative">
                <textarea
                    id={id}
                    ref={ref}
                    className={`border border-solid rounded-md px-3 py-2.5 w-full text-sm text-gray-700 resize-none ${error ? "border-red-600 focus:outline-red-600" : "border-gray-300 focus:outline-main"}`}
                    {...props}
                />
            </div>
            <p className={`text-sm text-red-600 mt-1 transition-all ${error ? "opacity-100 visible -translate-y-0" : "opacity-0 invisible -translate-y-1"}`}>{message}</p>
        </div>
    );
});

export default Textarea;
Textarea.displayName = "Textarea";