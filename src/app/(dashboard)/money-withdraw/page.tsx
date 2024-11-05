//Component
import Statics from "@/Components/Withdraw/Statics";
import Lists from "@/Components/Withdraw/Lists";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { GET_ANALYTICS } from "@/Apollo/query/analytics/analytic";
import { GET_WITHDRAW } from "@/Apollo/query/withdraw/withdraw";


const Page = () => {
    return (
        <div>
            <PreloadQuery query={GET_ANALYTICS}>
                <Statics />
            </PreloadQuery>
            <PreloadQuery query={GET_WITHDRAW}>
                <Lists />
            </PreloadQuery>
        </div>
    );
};

export default Page;