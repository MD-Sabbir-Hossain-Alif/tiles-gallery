"use client";

import { useState } from "react";
import AllTilesCard from "@/components/AllTilesCard/AllTilesCard";
import { SearchField } from "@heroui/react";
import { useTransition, animated } from "@react-spring/web";

const AllTilesClient = ({ data }) => {
    const [search, setSearch] = useState("");

    const filteredTiles = data.filter((tile) =>
        tile.title.toLowerCase().includes(search.toLowerCase()),
    );

    const transitions = useTransition(filteredTiles, {
        keys: (item) => item.id,
        from: { opacity: 0, transform: "scale(0.9) translateY(20px)" },
        enter: { opacity: 1, transform: "scale(1) translateY(0px)" },
        leave: { opacity: 0, transform: "scale(0.9) translateY(20px)" },
        trail: 60,
    });

    return (
        <section className="container mx-auto pt-10 pb-26 bg-linear-to-br from-[#272757] via-[#2f2f6f] to-[#1a1a3d] text-white">
            <div className="px-6">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-6xl font-bold text-[#C2B280] mb-3">
                        Tiles Gallery
                    </h2>
                </div>

                {/* Search */}
                <div className="w-full max-w-xl mx-auto px-4 sm:px-0 space-y-4 mb-6">
                    <SearchField fullWidth>
                        <SearchField.Group>
                            <SearchField.SearchIcon />
                            <SearchField.Input
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <SearchField.ClearButton
                                onClick={() => setSearch("")}
                            />
                        </SearchField.Group>
                    </SearchField>
                </div>

                {/* Animated Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {transitions((style, item) => (
                        <animated.div style={style}>
                            <AllTilesCard tile={item} />
                        </animated.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllTilesClient;
