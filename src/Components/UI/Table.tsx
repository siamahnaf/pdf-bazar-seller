"use client"
import { ReactNode, useState, useEffect } from "react";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";

//Interface
interface Props<T> {
    children: ({ tableData }: { tableData: T[] }) => ReactNode;
    head: { name: string, id: string }[];
    sortingField: string[];
    data: T[];
    loading?: boolean;
    search?: string;
    emptyMessage?: string;
}

const Table = <T extends object>({ head, sortingField, data, children, loading, search = "", emptyMessage = "No data created yet!" }: Props<T>) => {
    //State
    const [sort, setSort] = useState<string>("default");
    const [current, setCurrent] = useState<string>("");
    const [updateData, setData] = useState<T[]>(data);

    //Helpers Functions
    const sortByNameAscending = (data: T[], item: string) => {
        return data.slice().sort((a: any, b: any) => {
            const nameA = a[item].toLowerCase();
            const nameB = b[item].toLowerCase();
            return nameA.localeCompare(nameB);
        });
    };

    //Helpers Functions
    const sortByNameDescending = (data: T[], item: string) => {
        return data.slice().sort((a: any, b: any) => {
            const nameA = a[item].toLowerCase();
            const nameB = b[item].toLowerCase();
            return nameB.localeCompare(nameA);
        });
    };

    //Handler
    const onSortTable = (item: string) => {
        if (sortingField.includes(item)) {
            switch (sort) {
                case "default":
                    setSort("up");
                    setCurrent(item);
                    const aData = sortByNameAscending(data, item);
                    setData(aData)
                    break;
                case "up":
                    setSort("down");
                    setCurrent(item);
                    const dData = sortByNameDescending(data, item);
                    setData(dData)
                    break;
                case "down":
                    setSort("default");
                    setCurrent(item);
                    setData(data)
                    break;
                default:
                    setSort("default");
                    setCurrent(item);
                    setData(data)
            }
        }
    }

    //Lifecycle Hook
    useEffect(() => {
        setData(data)
    }, [data])

    return (
        <div className="overflow-auto h-full w-full shadow rounded relative">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {head.map((item, i) => (
                            <th key={i} className={`border-b border-black border-opacity-5 bg-white px-3 py-3 ${item.id === "action" ? "text-right" : "text-left"}`}>
                                <p
                                    className={`leading-none text-[15px] text-gray-700 opacity-75 font-semibold flex items-center ${item.id === "action" ? "justify-center" : "justify-left"} gap-1 ${sortingField.includes(item.id) ? "select-none cursor-pointer" : ""}`}
                                    onClick={() => onSortTable(item.id)}
                                >
                                    <span>{item.name}</span>
                                    {sortingField.includes(item.id) &&
                                        <span>
                                            <VscTriangleUp className={`-mb-[5px] text-xs ${item.id === current && sort === "down" ? "opacity-0" : "opacity-100"}`} />
                                            <VscTriangleDown className={`-mt-[5px] text-xs ${item.id === current && sort === "up" ? "opacity-0" : "opacity-100"}`} />
                                        </span>
                                    }
                                </p>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children?.({
                        tableData: updateData
                    })}
                    {
                        updateData.length === 0 &&
                        <tr>
                            <td colSpan={head.length} className="text-center py-6">
                                <p className="text-gray-500 text-[15px]">
                                    {search ? `No result found with "${search}"` : emptyMessage}
                                </p>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
            {loading &&
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center">
                    <div className="w-8 h-8 border-b-4 border-white rounded-full animate-spin"></div>
                </div>
            }
        </div>
    );
};

export default Table;