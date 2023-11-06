"use client";

import { SwiperSlide } from "swiper/react";
import SwipperWrapper from "../../../../components/swiper/SwiperWrapper";
import PopularSlideItem from "./PopularSlideItem";
import { SwiperOptions } from "swiper/types";
import { PopularTicketType } from "@/interface";

import styled from "styled-components";
import Sample from "public/images/sample/sample_concert.png";

const options: SwiperOptions = {
    slidesPerView: 2.5,
    spaceBetween: 10,
};

const data: PopularTicketType[] = [
    {
        id: 1,
        title: "2023 영탁 단독 콘서트 2023 영탁 단독 콘서트 2023 영탁 단독 콘서트",
        date: "2023.10.27 ~ 01.02",
        genre: "콘서트",
        image: Sample,
    },
    {
        id: 2,
        title: "2023 영탁 단독 콘서트 2023 영탁 단독 콘서트 2023 영탁 단독 콘서트",
        date: "2023.10.27 ~ 01.02",
        genre: "콘서트",
        image: Sample,
    },
    {
        id: 3,
        title: "2023 영탁 단독 콘서트 2023 영탁 단독 콘서트 2023 영탁 단독 콘서트",
        date: "2023.10.27 ~ 01.02",
        genre: "콘서트",
        image: Sample,
    },
];

export default function PopularSwiper() {
    return (
        <Block>
            <SwipperWrapper {...options}>
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <PopularSlideItem item={item} />
                    </SwiperSlide>
                ))}
            </SwipperWrapper>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 1.1rem;
    padding-left: 0.9rem;

    & > .swiper {
        padding-right: 0.9rem;
    }
`;
