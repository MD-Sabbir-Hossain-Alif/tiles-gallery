"use client";

import { useState } from "react";
import AllTilesCard from "@/components/AllTilesCard/AllTilesCard";
import { Label, SearchField } from "@heroui/react";
import { useTransition, animated } from "@react-spring/web";
import ScrollAnimation from "./ScrollAnimation";

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
        <section className="container mx-auto pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20 md:pb-26 bg-linear-to-br from-[#272757] via-[#2f2f6f] to-[#1a1a3d] text-white">
            <div className="px-4 sm:px-6">
                <div className="text-center mb-4 sm:mb-6 md:mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#C2B280] mb-2 sm:mb-3">
                        Tiles Gallery
                    </h2>
                </div>

                {/* search bar*/}
                <div className="w-full max-w-xl mx-auto px-4 sm:px-0 space-y-4 mb-4 md:mb-6">
                    <SearchField fullWidth>
                        <Label></Label>
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

                {/* animated */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {transitions((style, item) => (
                        <animated.div style={style}>
                            <ScrollAnimation>
                                <AllTilesCard tile={item} />
                            </ScrollAnimation>
                        </animated.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllTilesClient;
