"use client"
import { useState, Fragment } from "react";
import moment from "moment";

//Components
import { TableHeader, Table, TablePagination } from "@/Components/UI";

//Default Value
import { defaultSearch, SearchInput } from "@/Utils/search.default";

//Apollo
import { useSuspenseQuery } from "@apollo/client";
import { SALES_LIST } from "@/Apollo/query/sales/sales";

const Lists = () => {
    //Name
    const name = "Sales"

    //State
    const [pagination, setPagination] = useState<SearchInput>(defaultSearch);

    //Apollo
    const { data } = useSuspenseQuery(SALES_LIST, { variables: { searchDto: pagination }, errorPolicy: "all" });

    //Const Table Head
    const TABLE_HEAD = [
        { name: "ID", id: "id" },
        { name: "Title", id: "title" },
        { name: "Discount", id: "discount" },
        { name: "Start", id: "start_on" },
        { name: "Expire", id: "expires_on" },
        { name: "Status", id: "status" }
    ];

    return (
        <div>
            <TableHeader
                name={name}
                placeholder={`${name.toLowerCase()} name`}
                path=""
                data={data?.getSales.results?.map(item => ({ id: item.id, title: item.title, discount: item.discount, discount_unit: item.discount_unit })) as any[]}
                headers={["ID", "Title", "Discount", "Discount Unit"]}
                onChange={(e) => setPagination((prev) => ({ ...prev, search: e }))}
            />
            <Table
                head={TABLE_HEAD}
                sortingField={["title", "discount", "start_on", "expires_on"]}
                data={data?.getSales.results || []}
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
                                        <p className="font-semibold text-[15px]">
                                            {item.title}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.discount}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {moment(item.start_on).format("DD MMM YYYY, hh:mm A")}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {moment(item.expires_on).format("DD MMM YYYY, hh:mm A")}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {(moment().isAfter(moment(item.start_on)) && moment().isBefore(moment(item.expires_on))) && <span className="text-green-600">Running</span>}
                                            {moment().isBefore(moment(item.start_on)) &&
                                                <span className="text-main">Upcoming</span>}
                                            {moment().isAfter(moment(item.expires_on)) && <span className="text-red-600">Expired</span>}
                                        </p>
                                    </td>
                                </tr>
                            )
                        })}
                    </Fragment>
                )}
            </Table>
            <TablePagination
                meta={data?.getSales.meta}
                onChange={(e) => setPagination((prev) => ({ ...prev, page: e }))}
                onLimitChange={(e) => setPagination((prev) => ({ ...prev, limit: e }))}
            />
        </div>
    );
};

export default Lists;