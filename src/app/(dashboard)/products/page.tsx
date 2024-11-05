import Lists from "@/Components/Products/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { PRODUCT_LIST } from "@/Apollo/query/product/product";

const Page = () => {
    return (
        <PreloadQuery query={PRODUCT_LIST} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;