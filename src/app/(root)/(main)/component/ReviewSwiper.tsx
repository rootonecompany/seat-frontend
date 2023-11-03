"use client";

import { SwiperSlide } from "swiper/react";
import styled from "styled-components";
import SwipperWrapper from "@/components/swiper/SwiperWrapper";
import ReviewSlideItem from "./ReviewSlideItem";

import { ReviewType } from "@/interface";
import { SwiperOptions } from "swiper/types";

const options: SwiperOptions = {
    slidesPerView: 1.15,
    spaceBetween: 12,
};

const data: ReviewType[] = [
    {
        id: 1,
        title: "2023 영탁 단독 콘서트 2023 영탁 단독 콘서트 2023 영탁 단독 콘서트2023 영탁 단독 콘서트 2023 영탁 단독 콘서트",
        rating: 4.9,
        name: "김*이",
        content:
            "티케팡으로 구매해서 재미있게 봤어요! 다음에도 임영훈 콘서트 꼭 갈거에요ㅎ 너…티케팡으로 구매해서 재미있게 봤어요! 다음에도 임영훈 콘서트 꼭 갈거에요ㅎ 너…티케팡으로 구매해서 재미있게 봤어요! 다음에도 임영훈 콘서트 꼭 갈거에요ㅎ 너…티케팡으로 구매해서 재미있게 봤어요! 다음에도 임영훈 콘서트 꼭 갈거에요ㅎ 너…",
        image: Sample,
    },
    {
        id: 2,
        title: "2023 영탁 단독 콘서트 2023 영탁 단독 콘서트 2023 영탁 단독 콘서트2023 영탁 단독 콘서트 2023 영탁 단독 콘서트",
        rating: 4.5,
        name: "최*이",
        content:
            "티케팡으로 구매해서 재미있게 봤어요! 다음에도 임영훈 콘서트 꼭 갈거에요ㅎ 너…티케팡으로 구매해서 재미있게 봤어요! 다음에도 임영훈 콘서트 꼭 갈거에요ㅎ 너…티케팡으로 구매해서 재미있게 봤어요! 다음에도 임영훈 콘서트 꼭 갈거에요ㅎ 너…티케팡으로 구매해서 재미있게 봤어요! 다음에도 임영훈 콘서트 꼭 갈거에요ㅎ 너…",
        image: Sample2,
    },
    {
        id: 3,
        title: "2023 영탁 단독 콘서트 2023 영탁 단독 콘서트 2023 영탁 단독 콘서트2023 영탁 단독 콘서트 2023 영탁 단독 콘서트",
        rating: 4.5,
        name: "최*이",
        content:
            "티케팡으로 구매해서 재미있게 봤어요! 다음에도 임영훈 콘서트 꼭 갈거에요ㅎ 너…티케팡으로 구매해서 재미있게 봤어요! 다음에도 임영훈 콘서트 꼭 갈거에요ㅎ 너…티케팡으로 구매해서 재미있게 봤어요! 다음에도 임영훈 콘서트 꼭 갈거에요ㅎ 너…티케팡으로 구매해서 재미있게 봤어요! 다음에도 임영훈 콘서트 꼭 갈거에요ㅎ 너…",
        image: Sample2,
    },
];

import Sample from "public/images/sample/sample_concert2.png";
import Sample2 from "public/images/sample/sample_concert.png";

export default function ReviewSwiper() {
    return (
        <Block>
            <SwipperWrapper {...options}>
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ReviewSlideItem item={item} />
                    </SwiperSlide>
                ))}
            </SwipperWrapper>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 0.7rem;
    padding-left: 0.9rem;

    & > .swiper {
        padding-right: 0.9rem;
        padding-bottom: 0.5rem;
    }
`;
