import { AllTilesData } from "@/lib/data";
import AllTilesClient from "@/components/AllTilesCard/AllTilesClient";

export const metadata = {
    title: "Tiles Gallery | All Tiles",
    description: "Best website for tiles",
};

const AllTilesPage = async () => {
    const data = await AllTilesData();

    return <AllTilesClient data={data} />;
};

export default AllTilesPage;
