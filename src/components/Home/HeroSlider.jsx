"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

const images = [
    "https://i.ibb.co.com/N2SSJ6hj/hero1.jpg",
    "https://i.ibb.co.com/21KLsPXt/hero2.jpg",
    "https://i.ibb.co.com/ynNJgkg2/hero3.jpg",
];

const HeroSlider = () => {
    return (
        <div className="absolute inset-0">
            <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="fade"
                loop={true}
                className="h-full w-full"
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative h-full w-full">
                            <Image
                                src={img}
                                alt="hero image"
                                fill
                                className="object-cover"
                                priority={i === 0}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;
