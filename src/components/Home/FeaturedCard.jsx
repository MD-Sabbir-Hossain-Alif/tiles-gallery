import Image from "next/image";
import Link from "next/link";

const FeaturedCard = ({ tile }) => {
    // console.log(tile)

    const { id, image, title, description, price, currency } = tile;

    // const handleViewDetails = (tile) => {
    //     alert(`Viewing details for: ${tile.title}`);
    //     router.push(`/tile/${tile.id}`);
    // };
    return (
        <div
            key={id}
            className="backdrop-blur-sm border border-white/20 cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
            {/* Image */}
            <div className="relative h-64">
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    loading="eager"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-2xl font-semibold mb-1.5">{title}</h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-[#98a869]">
                        ${price}
                        <span className="text-sm font-normal text-[#EAF4FF] ml-1">
                            {currency}
                        </span>
                    </div>
                </div>

                {/* View Details Button */}
                <Link href={`/tile/${tile.id}`}>
                    <button className="w-full bg-[#e35336] hover:bg-[#c7432a] cursor-pointer font-medium py-3 px-6 rounded-xl transition-colors duration-200">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCard;
