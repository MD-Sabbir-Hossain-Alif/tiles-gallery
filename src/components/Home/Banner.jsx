import { Button } from "@heroui/react";
import HeroSlider from "./HeroSlider";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="relative h-155 overflow-hidden">
            {/* Background Swiper */}
            <HeroSlider></HeroSlider>

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-[#272757]/30"></div>

            {/* Banner Content */}
            <div className="relative z-20 flex justify-between items-center h-full px-10 text-white">
                <div className="w-2/3">
                    <h1 className="text-8xl font-bold">
                        Discover Your Perfect Aesthetic
                    </h1>

                    <Link href="/all-tiles">
                        <Button className="bg-[#e35336] rounded-none px-8 mt-5 font-semibold">
                            Browse New
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;
