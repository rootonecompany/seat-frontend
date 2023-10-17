"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import "swiper/css";

interface Props extends SwiperOptions {
    children?: React.ReactNode;
}

export default function SwipperWrapper({ children, ...options }: Props) {
    return (
        <Swiper className="mySwiper" {...options}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    );
}
