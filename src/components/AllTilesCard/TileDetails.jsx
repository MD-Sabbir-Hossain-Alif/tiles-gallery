import Image from "next/image";

const TileDetails = ({ foundTile }) => {
    const {
        title,
        image,
        category,
        inStock,
        price,
        currency,
        description,
        material,
        dimensions,
    } = foundTile;
    // console.log(foundTile);
    return (
        <div className="min-h-screen container mx-auto bg-[#1a1a3d] text-white py-12">
            <div className="px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Side - Large High-Res Image */}
                    <div className="relative">
                        <div className="aspect-4/3 overflow-hidden border border-white/10 shadow-2xl bg-black">
                            <Image
                                src={image}
                                alt={title}
                                height={600}
                                width={800}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>

                        {/* Optional: Small thumbnails */}
                        <div className="flex gap-4 mt-5">
                            <div className="w-15 h-15 rounded-2xl overflow-hidden border-2 border-[#C2B280] ring-2 ring-offset-2 ring-offset-[#1a1a3d] ring-[#C2B280]">
                                <Image
                                    src={image}
                                    alt={title}
                                    width={60}
                                    height={60}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Details */}
                    <div className="space-y-4">
                        {/* Category & Stock */}
                        <div className="flex items-center gap-3">
                            <span className="px-4 py-1.5 bg-white/10 text-xs uppercase tracking-widest rounded-full border border-white/20">
                                {category.toUpperCase()}
                            </span>
                            <span
                                className={`px-4 py-1.5 text-xs rounded-full font-medium border ${
                                    inStock
                                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                                        : "bg-red-500/20 text-red-400 border-red-500/30"
                                }`}
                            >
                                {inStock ? "✓ In Stock" : "Out of Stock"}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl font-bold leading-tight">
                            {title}
                        </h1>

                        {/* Price */}
                        <div className="flex items-baseline gap-3">
                            <span className="text-4xl font-bold text-[#98a869]">
                                ${price}
                            </span>
                            <span className="text-xl text-white/70">
                                {currency}
                            </span>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-[#C2B280] text-xl font-semibold mb-3">
                                Description
                            </h3>
                            <p className="text-[#EAF4FF] leading-relaxed text-[17px]">
                                {description}
                            </p>
                        </div>

                        {/* Specifications */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <p className="text-white/60 text-sm mb-1">
                                    Material
                                </p>
                                <p className="text-2xl font-medium">
                                    {material}
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <p className="text-white/60 text-sm mb-1">
                                    Dimensions
                                </p>
                                <p className="text-2xl font-medium">
                                    {dimensions}
                                </p>
                            </div>
                        </div>

                        {/* Style Tags */}
                        {/* <div>
                            <h3 className="text-[#C2B280] text-xl font-semibold mb-4">
                                Style & Features
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Realistic Wood Grain",
                                    "Matte Finish",
                                    "Large Format",
                                    "Durable",
                                    "Easy Maintenance",
                                    "Oak Effect",
                                ].map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full text-sm transition-colors cursor-default"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div> */}

                        {/* Action Buttons */}
                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-[#e35336] hover:bg-[#c7432a] transition-all py-4 rounded-2xl font-semibold text-lg shadow-lg">
                                Add to Cart
                            </button>
                            <button className="flex-1 border border-white/30 hover:border-white/60 py-4 rounded-2xl font-semibold text-lg transition-all">
                                Save for Later
                            </button>
                        </div>

                        <p className="text-center text-sm text-white/50">
                            Free shipping on orders over $500 • 30-day easy
                            return
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TileDetails;
