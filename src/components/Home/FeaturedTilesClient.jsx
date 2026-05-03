"use client";

import { useTransition, animated } from "@react-spring/web";
import FeaturedCard from "./FeaturedCard";
import ScrollAnimation from "../AllTilesCard/ScrollAnimation";

const FeaturedTilesClient = ({ data }) => {
    const transitions = useTransition(data, {
        keys: (item) => item.id,
        from: { opacity: 0, transform: "scale(0.9) translateY(20px)" },
        enter: { opacity: 1, transform: "scale(1) translateY(0px)" },
        leave: { opacity: 0, transform: "scale(0.9) translateY(20px)" },
        trail: 80,
    });

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-[#272757] via-[#2f2f6f] to-[#1a1a3d] text-white">
            <div className="px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#C2B280] mb-2 sm:mb-3">
                        Featured Tiles
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#EAF4FF]">
                        Discover our most popular premium tiles
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {transitions((style, item) => (
                        <animated.div style={style}>
                            <ScrollAnimation>
                                <FeaturedCard tile={item} />
                            </ScrollAnimation>
                        </animated.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTilesClient;
