import { AllTilesData } from "@/lib/data";
import AllTilesCard from "@/components/AllTilesCard/AllTilesCard";

const AllTilesPage = async () => {
    const data = await AllTilesData();
    // console.log(data);
    return (
        <section className="container mx-auto pt-10 pb-26 bg-linear-to-br from-[#272757] via-[#2f2f6f] to-[#1a1a3d] text-white">
            <div className="px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-6xl font-bold text-[#C2B280] mb-3">
                        Tiles Gallery
                    </h2>
                </div>

                {/* Tiles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((tile) => (
                        <AllTilesCard key={tile.id} tile={tile}></AllTilesCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllTilesPage;
