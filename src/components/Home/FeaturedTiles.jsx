import { FeaturedTilesData } from "@/lib/data";
import FeaturedTilesClient from "@/components/Home/FeaturedTilesClient";

const FeaturedTiles = async () => {
    const data = await FeaturedTilesData();
    // console.log(data);
    return <FeaturedTilesClient data={data} />;
};
export default FeaturedTiles;
