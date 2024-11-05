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
import { GET_SELLER_ORDER } from "@/Apollo/query/order/order";

const Lists = () => {
    //Name
    const name = "Orders"

    //State
    const [pagination, setPagination] = useState<SearchInput>(defaultSearch);
    const [detail, setDetail] = useState<number | null>(null);

    //Apollo
    const { data } = useSuspenseQuery(GET_SELLER_ORDER, { variables: { searchDto: pagination }, errorPolicy: "all" });

    //Const Table Head
    const TABLE_HEAD = [
        { name: "ID", id: "id" },
        { name: "Order ID", id: "orderId" },
        { name: "Book Count", id: "bookCount" },
        { name: "Total Price", id: "total_price" },
        { name: "Status", id: "status" },
        { name: "Action", id: "action" }
    ];
    return (
        <div>
            <TableHeader
                name={name}
                placeholder={`${name.toLowerCase()} name`}
                path=""
                data={data?.getSellerOrders.results?.map(item => ({ id: item.id })) as any[]}
                headers={["ID"]}
                onChange={(e) => setPagination((prev) => ({ ...prev, search: e }))}
            />
            <Table
                head={TABLE_HEAD}
                sortingField={["orderId", "total_price", "status"]}
                data={data?.getSellerOrders.results || []}
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
                                            {item.orderId}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.products?.length} book(s)
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            Tk. {item.products?.reduce((sum, item) => sum + item.total_price, 0)}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className={`font-semibold capitalize text-[15px] ${item.status === "placed" ? "text-red-600" : (item.status === "confirmed" ? "text-purple-600" : "text-green-600")}`}>
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
                meta={data?.getSellerOrders.meta}
                onChange={(e) => setPagination((prev) => ({ ...prev, page: e }))}
                onLimitChange={(e) => setPagination((prev) => ({ ...prev, limit: e }))}
            />
        </div>
    );
};

export default Lists;