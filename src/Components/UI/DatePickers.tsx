"use client"
import OriginalPicker, { DatePickerProps } from "react-datepicker";
import { PiShieldWarningBold } from "react-icons/pi";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarClearSharp } from "react-icons/io5";

interface Props {
    label: string;
    error?: boolean;
    message?: string;
    id: string;
    pickerProps: DatePickerProps
}

const DatePicker = ({ label, error, message, id, pickerProps }: Props) => {
    return (
        <div className={`w-full ${error ? "mb-2" : "mb-0"}`}>
            <label htmlFor={id} className="font-semibold text-gray-500 mb-2 block text-[15px]">{label}</label>
            <OriginalPicker
                {...pickerProps}
                id={id}
                className={`border !pl-10 border-solid rounded-md !py-2.5 w-full text-base text-gray-700 ${error ? "border-red-600 focus:outline-red-600" : "border-gray-300 focus:outline-main"}`}
                dateFormat="dd MMM YYYY, p"
                locale="bn"
                wrapperClassName="w-full"
                popperPlacement="bottom-start"
                icon={<IoCalendarClearSharp />}
                showIcon
                calendarIconClassName="text-gray-400 absolute top-1/2 -translate-y-1/2 left-1.5"
            />
            <p className={`text-sm text-red-600 mt-1 flex items-center gap-1 transition-all ${error ? "opacity-100 visible -translate-y-0" : "opacity-0 invisible -translate-y-1"}`}>
                <PiShieldWarningBold className="text-base -mt-[2px]" />
                <span>{message}</span>
            </p>
        </div>
    );
};

export default DatePicker;