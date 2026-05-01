import { AllTilesData } from "@/lib/data";
import AllTilesClient from "@/components/AllTilesCard/AllTilesClient";

const AllTilesPage = async () => {
    const data = await AllTilesData();

    return <AllTilesClient data={data} />;
};

export default AllTilesPage;
