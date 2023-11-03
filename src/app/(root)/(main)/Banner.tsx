"use client";

import { SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import Wrap from "@/components/template/Wrap";
import SwipperWrapper from "@/components/swiper/SwiperWrapper";
import BannerSlideItem from "@/app/(root)/(main)/component/BannerSlideItem";
import { ConcertBannerType } from "@/interface";

import Concert from "public/images/sample/sample_concert.png";

const options: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
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
];

export default function Banner() {
    return (
        <Wrap height="normal">
            <SwipperWrapper {...options}>
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <BannerSlideItem item={item} />
                    </SwiperSlide>
                ))}
            </SwipperWrapper>
        </Wrap>
    );
}
