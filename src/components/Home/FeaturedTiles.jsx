import { FeaturedTilesData } from "@/lib/data";
import FeaturedCard from "./FeaturedCard";

const FeaturedTiles = async () => {
    const data = await FeaturedTilesData();
    // console.log(data);
    return (
        <section className="py-20 bg-linear-to-br from-[#272757] via-[#2f2f6f] to-[#1a1a3d] text-white">
            <div className="px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-6xl font-bold text-[#C2B280] mb-3">
                        Featured Tiles
                    </h2>
                    <p className="text-lg text-[#EAF4FF]">
                        Discover our most popular premium tiles
                    </p>
                </div>

                {/* Tiles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((tile) => (
                        <FeaturedCard key={tile.id} tile={tile}></FeaturedCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTiles;
