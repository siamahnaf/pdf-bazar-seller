"use client"
import Link from "next/link";
import { ExportAsExcel } from "react-export-table";
import { IoIosSearch } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import { BsPlusCircleFill } from "react-icons/bs";

//Interface
interface Props {
    name: string;
    placeholder: string;
    path: string;
    data: any[];
    headers: string[];
    onChange: (e: string) => void;
}

const TableHeader = ({ name, placeholder, path, data = [], headers, onChange }: Props) => {
    return (
        <div className="flex gap-4 items-center mb-6">
            <h4 className="flex-1 text-2xl font-medium text-gray-700">
                {name}
            </h4>
            <div className="flex gap-3">
                <div className="relative">
                    <input
                        className={`border border-solid rounded-md pr-3 pl-8 py-2.5 text-sm text-gray-700 border-gray-300 w-[300px] focus:outline-main`}
                        placeholder={`Search by ${placeholder}`}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <IoIosSearch className="text-xl text-gray-500 absolute top-1/2 left-2 -translate-y-1/2" />
                </div>
                <ExportAsExcel
                    data={data}
                    headers={headers}
                >
                    {(props) => (
                        <button className={`flex gap-1 border border-solid border-gray-300 rounded-md px-5 items-center justify-center ${data.length === 0 ? "text-gray-900/35" : "text-gray-600"}`} {...props} disabled={data.length === 0}>
                            <HiDownload className="text-lg" />
                            <span className="text-[15px] font-semibold">Export</span>
                        </button>
                    )}
                </ExportAsExcel>
                {path &&
                    <Link href={path} className="flex gap-2 items-center justify-center bg-main rounded-md px-4 text-white">
                        <BsPlusCircleFill />
                        <span className="text-[15px] font-semibold">Add New</span>
                    </Link>
                }
            </div>
        </div>
    );
};

export default TableHeader;