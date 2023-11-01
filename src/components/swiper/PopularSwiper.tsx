"use client";

import styled from "styled-components";
import SwipperWrapper from "./SwiperWrapper";
import { SwiperSlide } from "swiper/react";

import Sample from "public/images/sample/sample_concert.png";
import { Colors } from "@/styles/Colors";
import { SwiperOptions } from "swiper/types";

const options: SwiperOptions = {
    slidesPerView: 2.5,
    spaceBetween: 10,
};

export default function PopularSwiper() {
    return (
        <Block>
            <SwipperWrapper {...options}>
                <SwiperSlide>
                    <SwiperItem>
                        <Thumbnail />
                        <ConcertInfoWrap>
                            <h6>
                                2023 영탁 단독 콘서 트 2023 영탁 단독 콘서 트
                                2023 영탁 단독 콘서 트
                            </h6>
                            <span>2023.10.27 ~ 01.02</span>
                            <TicketLabel>콘서트</TicketLabel>
                        </ConcertInfoWrap>
                    </SwiperItem>
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperItem>
                        <Thumbnail />
                        <ConcertInfoWrap>
                            <h6>
                                2023 영탁 단독 콘서 트 2023 영탁 단독 콘서 트
                                2023 영탁 단독 콘서 트
                            </h6>
                            <span>2023.10.27 ~ 01.02</span>
                            <TicketLabel>콘서트</TicketLabel>
                        </ConcertInfoWrap>
                    </SwiperItem>
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperItem>
                        <Thumbnail />
                        <ConcertInfoWrap>
                            <h6>
                                2023 영탁 단독 콘서 트 2023 영탁 단독 콘서 트
                                2023 영탁 단독 콘서 트
                            </h6>
                            <span>2023.10.27 ~ 01.02</span>
                            <TicketLabel>콘서트</TicketLabel>
                        </ConcertInfoWrap>
                    </SwiperItem>
                </SwiperSlide>
            </SwipperWrapper>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 1.1rem;
    padding-left: 0.9rem;
`;

const SwiperItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;
const Thumbnail = styled.div`
    max-width: 100%;
    height: 0;
    padding-bottom: calc(160 / 130 * 100%);
    background: url(${Sample.src}) no-repeat center / cover;
    border-radius: 0.3rem;
    overflow: hidden;
`;
const ConcertInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    h6 {
        font-size: 0.7rem;
        font-weight: 600;
        line-height: 1.3;
        color: ${Colors.black3};
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    span {
        font-size: 0.65rem;
        font-weight: 400;
        color: ${Colors.black1};
    }
`;
const TicketLabel = styled.div`
    width: fit-content;
    margin-top: 0.2rem;
    padding: 0.15rem 0.35rem;
    border-radius: 0.2rem;
    border: 1px solid #ffbe66;
    font-size: 0.55rem;
    font-weight: 600;
    color: #ff9200;
`;
