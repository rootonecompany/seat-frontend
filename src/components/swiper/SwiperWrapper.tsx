"use client";

import { Swiper } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import "swiper/css";

interface Props extends SwiperOptions {
    children?: React.ReactNode;
}

export default function SwipperWrapper({ children, ...options }: Props) {
    return (
        <Swiper className="mySwiper" {...options}>
            {children}
        </Swiper>
    );
}
