import Lists from "@/Components/Sales/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { SALES_LIST } from "@/Apollo/query/sales/sales";

const Page = async () => {
    return (
        <PreloadQuery query={SALES_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;