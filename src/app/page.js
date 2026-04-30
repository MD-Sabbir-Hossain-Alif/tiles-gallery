import Banner from "@/components/Home/Banner";
import FeaturedTiles from "@/components/Home/FeaturedTiles";
import MarqueeSection from "@/components/Home/Marquee";

export default function Home() {
  return (
    <div className="container mx-auto h-full">
      {/* Banner Section  */}
      <Banner></Banner>

      {/* Marquee Section  */}
      <MarqueeSection></MarqueeSection>

      {/* Featured Section  */}
      <FeaturedTiles></FeaturedTiles>
    </div>
  );
}
