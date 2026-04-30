"use client";
import Image from "next/image";

const FeaturedCard = ({ tile }) => {
    const handleViewDetails = (tile) => {
        alert(`Viewing details for: ${tile.title}`);
        // Replace with navigation later: navigate(`/tile/${tile.id}`)
    };
    return (
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
    );
};

export default FeaturedCard;
