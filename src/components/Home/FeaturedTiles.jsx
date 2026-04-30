"use client";
import Image from "next/image";

const featuredTiles = [
    {
        id: "tile_001",
        title: "Ceramic Blue Tile",
        description: "Premium ceramic tile with blue glaze finish",
        image: "/images/tiles/tile_001.jpg",
        price: 45.99,
        currency: "USD",
    },
    {
        id: "tile_002",
        title: "Marble White Gloss",
        description: "Elegant polished marble effect porcelain tile",
        image: "/images/tiles/tile_002.jpg",
        price: 68.5,
        currency: "USD",
    },
    {
        id: "tile_005",
        title: "Wood Look Plank",
        description: "Realistic oak wood effect porcelain plank tile",
        image: "/images/tiles/tile_005.jpg",
        price: 52.75,
        currency: "USD",
    },
    {
        id: "tile_010",
        title: "Gold Veined Marble",
        description: "Luxury white marble with gold veins porcelain tile",
        image: "/images/tiles/tile_010.jpg",
        price: 95.5,
        currency: "USD",
    },
];

const FeaturedTiles = () => {
    const handleViewDetails = (tile) => {
        alert(`Viewing details for: ${tile.title}`);
        // Replace with navigation later: navigate(`/tile/${tile.id}`)
    };

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredTiles.map((tile) => (
                        <div
                            key={tile.id}
                            className="backdrop-blur-sm border border-white/20 cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative h-64">
                                <Image
                                    src={tile.image}
                                    alt={tile.title}
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    {tile.title}
                                </h3>

                                <p className="text-[#EAF4FF] text-sm leading-relaxed mb-4 line-clamp-2">
                                    {tile.description}
                                </p>

                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-2xl font-bold text-[#98a869]">
                                        ${tile.price}
                                        <span className="text-sm font-normal text-[#EAF4FF] ml-1">
                                            {tile.currency}
                                        </span>
                                    </div>
                                </div>

                                {/* View Details Button */}
                                <button
                                    onClick={() => handleViewDetails(tile)}
                                    className="w-full bg-[#e35336] hover:bg-[#c7432a] cursor-pointer font-medium py-3 px-6 rounded-xl transition-colors duration-200"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTiles;
