"use client"
import { useState, useRef, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import InfiniteScroll from "react-infinite-scroll-component";
import { PiShieldWarningBold } from "react-icons/pi";

//UI
import { useKeyboardNavigation, useOutsideClick, Loading } from "@/Components/UI";

//Default
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { useQuery } from "@apollo/client";
import { WRITER_LIST } from "@/Apollo/query/writer/writer";

//Interface
interface Props {
    error?: boolean;
    message?: string;
    onChange: (e: string) => void;
    value: string;
}

const Writers = ({ error = false, message = "", value, onChange }: Props) => {
    //Static
    const id = "writers";
    const placeholder = "Select writer";

    //State
    const [open, setOpen] = useState<boolean>(false);
    const [list, setList] = useState<{ value: string; label: string }[]>([]);
    const [label, setLabel] = useState<string>(list.find((item) => item.value === value)?.label || "");

    //Apollo
    const { data, loading, fetchMore, refetch, variables } = useQuery(WRITER_LIST, { variables: { searchDto: defaultSearch } });

    //Initializing Hook
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { cursor, setCursor, ref } = useKeyboardNavigation(list, (value: string) => {
        onChange(value);
        setOpen(false);
    }, open);

    //Handler
    useOutsideClick(containerRef, () => setOpen(false))

    //Handler
    const onSelect = (value: string, index: number) => {
        onChange(value);
        setCursor(index)
        setOpen(false);

    };

    //Handler
    const onFetchMore = () => {
        fetchMore({
            variables: { searchDto: { ...variables?.searchDto, page: Number(variables?.searchDto.page) + 1 } },
            updateQuery: (previousData, { fetchMoreResult }) => {
                if (!fetchMoreResult) return previousData;

                const updatedFeed = [
                    ...(previousData.getWriters.results || []),
                    ...(fetchMoreResult.getWriters.results || []),
                ];

                return {
                    ...previousData,
                    getCategories: {
                        ...previousData.getWriters,
                        results: updatedFeed,
                        meta: fetchMoreResult.getWriters.meta,
                    },
                };
            },
        })
    }

    //Handler
    const onRefetch = (value: string) => {
        refetch({ searchDto: { ...variables?.searchDto, search: value } });
        setCursor(-1);
    }

    //Effect
    useEffect(() => {
        const options = data?.getWriters.results?.map(a => {
            return { value: a.id?.toString(), label: a.name }
        });
        if (Number(options?.length) > 0) {
            setList(options || []);
        }
    }, [data])

    useEffect(() => {
        if (!value) {
            setLabel("");
        } else {
            setLabel(list.find((item) => item.value === value)?.label || "");
        }
    }, [value, list]);

    return (
        <div className={`${error ? "mb-2" : "mb-0"}`}>
            <label
                htmlFor={id}
                className="font-semibold text-gray-500 mb-2 block text-[15px]"
                onClick={() => setOpen(true)}
            >
                Writers
            </label>
            <div className="relative" ref={containerRef}>
                <button
                    type="button"
                    className={`border text-left border-solid rounded-md px-3 py-2.5 w-full text-base text-gray-700 cursor-pointer ${open ? `outline-2 ${error ? "outline-red-600" : "outline-main"} outline border-transparent` : `outline-none ${error ? "border-red-600" : "border-gray-300"}`}`}
                    onClick={() => setOpen(true)}
                >
                    {label ? <span>{label}</span> : <span className="text-gray-400 font-medium">{placeholder}</span>}
                </button>
                <div
                    className={`absolute top-0 right-0 bottom-0 px-2 flex justify-center items-center rounded-e-md transition-all ${open ? "rotate-180" : ""
                        }`}
                >
                    <HiChevronDown className="text-[22px] text-gray-500/95" />
                </div>
                <div id="writer_scroll_target" className={`max-h-[400px] absolute top-full mt-2 left-0 w-full border border-solid transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] border-gray-200 rounded-md z-40 bg-white shadow-3xl overflow-auto origin-center ${open ? "opacity-100 scale-100 visible" : "opacity-0 invisible scale-95"}`}>
                    <div className="mx-4 my-3 relative">
                        <IoSearchOutline className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" />
                        <input
                            placeholder="Search"
                            className="border border-solid border-gray-300 w-full pl-8 pr-8 py-1.5 rounded focus:outline-none text-gray-500"
                            onChange={(e) => onRefetch(e.target.value)}
                        />
                        {loading &&
                            <div className="absolute top-1/2 -translate-y-1/2 right-3">
                                <Loading size={20} />
                            </div>
                        }
                    </div>
                    <InfiniteScroll
                        dataLength={list.length}
                        next={() => onFetchMore()}
                        hasMore={!variables?.searchDto.search ? Number(data?.getWriters.meta?.currentPage) < Number(data?.getWriters.meta?.totalPages) : false}
                        loader={<span></span>}
                        scrollableTarget="writer_scroll_target"
                    >
                        <ul ref={ref}>
                            {list.map((item, i) => (
                                <li
                                    key={i}
                                    className={`px-4 hover:bg-gray-100 py-1.5 text-[15px] text-gray-500 font-medium select-none cursor-pointer relative ${item.value === value ? "bg-gray-100" : ""
                                        } ${cursor === i ? "bg-gray-100" : ""}`}
                                    onClick={() => onSelect(item.value, i)}
                                >
                                    {item.label}
                                    {item.value === value && (
                                        <FaCheck className="absolute top-1/2 right-3 text-main text-sm -translate-y-1/2" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </InfiniteScroll>
                    {loading && !variables?.searchDto.search &&
                        <div className="px-4 py-2">
                            <Loading size={20} />
                            <p className="text-sm text-gray-500 font-light mt-1">Please wait....</p>
                        </div>
                    }
                    {list.length === 0 && !loading && (
                        <p className="py-2 px-3 text-sm text-gray-500">Nothing found!</p>
                    )}
                </div>
            </div>
            <p className={`text-sm text-red-600 mt-1 flex items-center gap-1 transition-all ${error ? "opacity-100 visible -translate-y-0" : "opacity-0 invisible -translate-y-1"}`}>
                <PiShieldWarningBold className="text-base -mt-[2px]" />
                <span>{message}</span>
            </p>
        </div>
    );
};

export default Writers;