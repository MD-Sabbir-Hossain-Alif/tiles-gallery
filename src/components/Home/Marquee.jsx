"use client";
import Marquee from "react-fast-marquee";

const news = [
    {
        id: 1,
        title: "New Arrivals:",
        content: "Premium Ceramic & Porcelain Tiles",
    },
    {
        id: 2,
        title: "Featured Collection:",
        content: "Modern Geometric Patterns",
    },
    { id: 3, title: "Free Shipping:", content: "on Orders Over $200" },
    {
        id: 4,
        title: "Join Our Community:",
        content: "for Design Tips & Exclusive Offers",
    },
];

const MarqueeSection = () => {
    return (
        <div className="flex items-center bg-white/10 backdrop-blur-sm p-3 sm:p-4 md:p-6 gap-2 container mx-auto my-10 md:my-20">
            <Marquee pauseOnHover speed={50}>
                {news.map((item) => (
                    <span
                        key={item.id}
                        className="text-sm sm:text-base md:text-xl lg:text-2xl mr-4 sm:mr-6 flex items-center gap-3 sm:gap-4 md:gap-6"
                    >
                        <span>{item.title}</span>
                        <span className="text-[#C2B280]">{item.content}</span>
                        <span className="text-[#e35336]">|</span>
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeSection;
