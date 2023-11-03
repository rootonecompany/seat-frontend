"use client";

import SwipperWrapper from "@/components/swiper/SwiperWrapper";
import { SwiperSlide } from "swiper/react";
import GiftCardSlideItem from "./GiftCardSlideItem";
import { SwiperOptions } from "swiper/types";
import { GiftCardType } from "@/interface";
import styled from "styled-components";

const options: SwiperOptions = {
    slidesPerView: 2.3,
    spaceBetween: 12,

    breakpoints: {
        600: {
            slidesPerView: 2.5,
        },
        700: {
            slidesPerView: 2.7,
        },
    },
};

import Gift1 from "public/images/sample/sample_gift1.png";
import Gift2 from "public/images/sample/sample_gift2.png";
import Gift3 from "public/images/sample/sample_gift3.png";

const data: GiftCardType[] = [
    {
        id: 1,
        title: "아이템매니아 쿠폰 5만원권",
        price: "50,000원",
        image: Gift1,
        discount: "5%",
    },
    {
        id: 2,
        title: "아이템베이 마일리지 5만원권",
        price: "50,000원",
        image: Gift2,
    },
    {
        id: 3,
        title: "IB 포인트 쿠폰 5만원권",
        price: "50,000원",
        image: Gift3,
        discount: "5%",
    },
];

export default function GiftCardSwiper() {
    return (
        <Block>
            <SwipperWrapper {...options}>
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <GiftCardSlideItem item={item} />
                    </SwiperSlide>
                ))}
            </SwipperWrapper>
        </Block>
    );
}

const Block = styled.div`
    padding-left: 0.9rem;
    margin-top: 0.8rem;

    .swiper {
        padding-right: 0.9rem;
    }
`;
