//Components
import Analytics from "@/Components/Dashboard/Analytics";
import Badge from "@/Components/Dashboard/Badge";

//Apollo
import { PreloadQuery } from "@/Apollo/client";
import { GET_PROFILE } from "@/Apollo/query/account/account";

const Page = () => {
  return (
    <div>
      <Analytics />
      <PreloadQuery query={GET_PROFILE}>
        <Badge />
      </PreloadQuery>
    </div>
  );
};

export default Page;