"use client"
import { useState, Fragment } from "react";
import Tippy from "@tippyjs/react";
import { RiEye2Line } from "react-icons/ri";

//Components
import { TableHeader, Table, TablePagination } from "@/Components/UI";

//Components
import Details from "./Details";

//Default Value
import { defaultSearch, SearchInput } from "@/Utils/search.default";

//Apollo
import { useSuspenseQuery } from "@apollo/client";
import { GET_WITHDRAW } from "@/Apollo/query/withdraw/withdraw";

const Lists = () => {
    //Name
    const name = "Withdraw History"

    //State
    const [pagination, setPagination] = useState<SearchInput>(defaultSearch);
    const [detail, setDetail] = useState<number | null>(null);

    //Apollo
    const { data } = useSuspenseQuery(GET_WITHDRAW, { variables: { searchDto: pagination }, errorPolicy: "all" });

    //Const Table Head
    const TABLE_HEAD = [
        { name: "ID", id: "id" },
        { name: "Amount", id: "amount" },
        { name: "Method", id: "method" },
        { name: "Released By", id: "release" },
        { name: "Status", id: "status" },
        { name: "Action", id: "action" }
    ];
    return (
        <div className="mt-12">
            <TableHeader
                name={name}
                placeholder={`${name.toLowerCase()} name`}
                path=""
                data={data?.getWithdrawBySeller.results?.map(item => ({ id: item.id })) as any[]}
                headers={["ID"]}
                onChange={(e) => setPagination((prev) => ({ ...prev, search: e }))}
            />
            <Table
                head={TABLE_HEAD}
                sortingField={["amount", "method", "status"]}
                data={data?.getWithdrawBySeller.results || []}
                search={pagination.search}
                emptyMessage={`${name} not created yet!`}
            >
                {({
                    tableData,
                }) => (
                    <Fragment>
                        {tableData.map((item, i) => {
                            const classes = i === tableData.length - 1 ? "px-3 py-2" : "px-3 py-2 border-b border-black border-opacity-5";
                            return (
                                <tr key={i}>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.id}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px] capitalize">
                                            Tk. {item.amount}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.method}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.released_by?.name}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className={`font-semibold capitalize text-[15px] ${item.status === "Pending" ? "text-yellow-400" : (item.status === "Released" ? "text-purple-600" : (item.status === "Rejected" ? "text-red-600" : "text-green-600"))}`}>
                                            {item.status}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex gap-3 justify-center items-center">
                                            <Tippy content="View Details" className="bg-gray-600 text-white py-[3px] px-2.5 rounded-md text-sm">
                                                <button onClick={() => setDetail(item.id)}>
                                                    <RiEye2Line />
                                                </button>
                                            </Tippy>
                                            <Details
                                                open={detail === item.id}
                                                onClose={() => setDetail(null)}
                                                item={item}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </Fragment>
                )}
            </Table>
            <TablePagination
                meta={data?.getWithdrawBySeller.meta}
                onChange={(e) => setPagination((prev) => ({ ...prev, page: e }))}
                onLimitChange={(e) => setPagination((prev) => ({ ...prev, limit: e }))}
            />
        </div>
    );
};

export default Lists;