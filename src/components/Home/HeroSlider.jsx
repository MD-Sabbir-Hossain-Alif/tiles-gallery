"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const images = ["/hero1.png", "/hero2.jpg", "/hero3.jpg"];

const HeroSlider = () => {
    return (
        <div className="absolute inset-0">
            <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect="fade"
                loop={true}
                className="h-full w-full"
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;
