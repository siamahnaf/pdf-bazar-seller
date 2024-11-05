import Lists from "@/Components/Reviews/Lists";

//Default Value
import { defaultSearch } from "@/Utils/search.default";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { GET_REVIEWS } from "@/Apollo/query/reviews/reviews";

const Page = async () => {
    return (
        <PreloadQuery query={GET_REVIEWS} variables={{ searchDto: defaultSearch }}>
            <Lists />
        </PreloadQuery>
    );
};

export default Page;