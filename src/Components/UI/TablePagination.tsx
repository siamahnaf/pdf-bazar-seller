"use client"
import { useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

//Helpers
import useOutsideClick from "./outside-click";

//Interface
interface Props {
    meta: any;
    onChange: (e: number) => void;
    onLimitChange: (e: number) => void;
}

const TablePagination = ({ meta, onChange, onLimitChange }: Props) => {
    //State
    const [open, setOpen] = useState<boolean>(false);
    const [limit, setLimit] = useState<number>(meta?.itemsPerPage || 10);

    //Initializing Hook
    const ref = useRef<HTMLDivElement>(null);

    //Handler
    useOutsideClick(ref, () => setOpen(false))

    //On Next
    const onNext = () => {
        const page = Number(meta?.currentPage) + 1
        onChange(page)
    }

    //On Prev
    const onPrev = () => {
        const page = Number(meta?.currentPage) - 1
        onChange(page)
    }

    //Get page number
    const getPageNumbers = () => {
        const totalPages = meta?.totalPages as number;
        const currentPage = meta?.currentPage as number;
        const pageNumbers = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            let startPage;
            let endPage;

            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage >= totalPages - 2) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }

            if (startPage > 1) {
                pageNumbers.push("...");
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            if (endPage < totalPages) {
                pageNumbers.push("...");
            }
        }
        return pageNumbers;
    };


    return (
        <div className="flex gap-3 items-center mt-5">
            <div className="flex-1">
                <div className="w-[110px] relative" ref={ref}>
                    <button className={`border border-solid border-gray-300 py-2 px-3 rounded-md text-[15px] text-gray-600 w-full text-left ${open ? "outline outline-[3px] outline-main border-transparent" : ""}`} onClick={() => setOpen(!open)}>
                        <span>{limit} / page</span>
                    </button>
                    {open &&
                        <ul className={`absolute bg-white border border-solid border-gray-200 top-full left-0 w-full overflow-hidden mt-1.5 rounded-md`}>
                            {LimitList.map((item, i) => (
                                <li key={i} className={`select-none cursor-pointer px-3 py-1.5 hover:bg-gray-300 ${item === limit ? "bg-gray-300" : ""}`} onClick={() => { onLimitChange(item); setOpen(false); setLimit(item) }}>
                                    {item} / page
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
            {Number(meta?.totalPages) > 1 &&
                <div className="flex gap-2 items-center w-max ml-auto text-main">
                    <button className={`w-8 h-8 rounded flex justify-center items-center ${meta?.currentPage as number <= 1 && "opacity-50 pointer-events-none"}`} onClick={onPrev}>
                        <FiChevronLeft className="text-2xl" />
                    </button>
                    {getPageNumbers().map((pageNumber, i) => {
                        if (pageNumber !== "...") {
                            return (
                                <button key={i} className={`w-8 h-8 rounded flex justify-center items-center text-[15px] ${meta?.currentPage === pageNumber ? "bg-main text-white" : "bg-primary text-main"}`} onClick={() => onChange(pageNumber as number)}>
                                    <span>{pageNumber}</span>
                                </button>
                            )
                        } else {
                            return (
                                <button key={i} className="bg-primary w-8 h-8 rounded text-main flex justify-center items-center">
                                    <span>{pageNumber}</span>
                                </button>
                            )
                        }
                    })}
                    <button className={`w-8 h-8 rounded flex justify-center items-center ${Number(meta?.currentPage) >= Number(meta?.totalPages) && "opacity-50"}`} onClick={onNext} disabled={Number(meta?.currentPage) >= Number(meta?.totalPages)}>
                        <FiChevronRight className="text-2xl" />
                    </button>
                </div>
            }
        </div>
    );
};

export default TablePagination;

const LimitList = [
    2, 10, 25, 50, 100
]