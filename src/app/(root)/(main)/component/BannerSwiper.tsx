"use client";

import SwipperWrapper from "@/components/swiper/SwiperWrapper";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import BannerSlideItem from "./BannerSlideItem";

import { SwiperOptions } from "swiper/types";
import { ConcertBannerType } from "@/interface";

const data: ConcertBannerType[] = [
    {
        id: 1,
        mainTitle: "2023 조용필 & 위대한탄생\n 콘서트_[서울] [대구]",
        subHeading: "조용필 콘서트",
        image: Concert,
        date: "2023.10.27 ~ 2024.01.02",
    },
    {
        id: 2,
        mainTitle: "2023 조용필 & 위대한탄생\n 콘서트_[서울] [대구]",
        subHeading: "조용필 콘서트",
        image: Concert,
        date: "2023.10.27 ~ 2024.01.02",
    },
    {
        id: 3,
        mainTitle: "2023 조용필 & 위대한탄생\n 콘서트_[서울] [대구]",
        subHeading: "조용필 콘서트",
        image: Concert,
        date: "2023.10.27 ~ 2024.01.02",
    },
];

const options: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: data.length > 2 ? true : false,
    modules: [Autoplay],
    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        500: {
            slidesPerView: 1.4,
        },
        600: {
            slidesPerView: 1.6,
        },
        700: {
            slidesPerView: 1.8,
        },
    },
};

import Concert from "public/images/sample/sample_concert.png";

export default function BannerSwiper() {
    return (
        <SwipperWrapper {...options}>
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <BannerSlideItem item={item} />
                </SwiperSlide>
            ))}
        </SwipperWrapper>
    );
}
