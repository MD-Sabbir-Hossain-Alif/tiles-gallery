import { AllTilesData } from "@/lib/data";
import TileDetails from "@/components/AllTilesCard/TileDetails";
import NotFound from "@/app/not-found";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const data = await AllTilesData();
    // console.log(data)

    const foundTile = data.find((t) => t.id === id);
    return {
        title: foundTile.title,
        description: foundTile.details,
    };
};

const TileDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const data = await AllTilesData();
    const foundTile = data.find((t) => t.id === id);

    if (!foundTile) {
        return NotFound();
    }

    return <TileDetails foundTile={foundTile}></TileDetails>;
};

export default TileDetailsPage;
