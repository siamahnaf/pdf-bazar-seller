"use client"
import { useState, Fragment } from "react";
import Tippy from "@tippyjs/react";
import { RiEye2Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

//Components
import { TableHeader, Table, TablePagination } from "@/Components/UI";

//Components
import Details from "./Details";

//Default Value
import { defaultSearch, SearchInput } from "@/Utils/search.default";

//Apollo
import { useSuspenseQuery } from "@apollo/client";
import { GET_REVIEWS } from "@/Apollo/query/reviews/reviews";

const Lists = () => {
    //Name
    const name = "Reviews"

    //State
    const [pagination, setPagination] = useState<SearchInput>(defaultSearch);
    const [detail, setDetail] = useState<number | null>(null);

    //Apollo
    const { data } = useSuspenseQuery(GET_REVIEWS, { variables: { searchDto: pagination }, errorPolicy: "all" });

    //Const Table Head
    const TABLE_HEAD = [
        { name: "ID", id: "id" },
        { name: "Book Name", id: "name" },
        { name: "Category", id: "category" },
        { name: "Customer Name", id: "customerName" },
        { name: "Customer Number", id: "customerNumber" },
        { name: "Rating", id: "rating" },
        { name: "Status", id: "publish" },
        { name: "Action", id: "action" }
    ];

    return (
        <div>
            <TableHeader
                name={name}
                placeholder={`${name.toLowerCase()} name`}
                path=""
                data={data?.getReviewBySeller.results?.map(item => ({ id: item.id, name: item.product?.name, category: item.product?.category })) as any[]}
                headers={["ID", "Name", "Category"]}
                onChange={(e) => setPagination((prev) => ({ ...prev, search: e }))}
            />
            <Table
                head={TABLE_HEAD}
                sortingField={["rating", "publish"]}
                data={data?.getReviewBySeller.results || []}
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
                                            {item.product?.name}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.product?.category?.name}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.user?.name}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px]">
                                            {item.user?.phone}
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className="font-semibold text-[15px] flex gap-1 items-center">
                                            <span>{item.rating}</span>
                                            <FaStar />
                                        </p>
                                    </td>
                                    <td className={classes}>
                                        <p className={`font-semibold text-[15px] ${item.publish ? "text-green-600" : "text-red-600"}`}>
                                            {item.publish ? "Published" : "Hidden"}
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
                meta={data?.getReviewBySeller.meta}
                onChange={(e) => setPagination((prev) => ({ ...prev, page: e }))}
                onLimitChange={(e) => setPagination((prev) => ({ ...prev, limit: e }))}
            />
        </div>
    );
};

export default Lists;