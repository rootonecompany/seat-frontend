"use client";

import { StaticImageData } from "next/image";
import { PopularTicketType } from "@/interface";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    item: PopularTicketType;
}

export default function PopularSlideItem({ item }: Props) {
    const { id, mainTitle, date, genre, thumbnail } = item;
    return (
        <SwiperItem>
            <Thumbnail $thumbnail={thumbnail}>
                <span>{id}</span>
            </Thumbnail>
            <ConcertInfoWrap>
                <h6>{mainTitle}</h6>
                <span>{date}</span>
                <TicketLabel>{genre}</TicketLabel>
            </ConcertInfoWrap>
        </SwiperItem>
    );
}

const SwiperItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;
const Thumbnail = styled.div<{ $thumbnail: StaticImageData }>`
    position: relative;
    max-width: 100%;
    height: 0;
    padding-bottom: calc(160 / 130 * 100%);
    border-radius: 0.3rem;
    overflow: hidden;
    ${({ $thumbnail }) =>
        `background: url(${$thumbnail.src}) no-repeat center / cover;`}

    span {
        position: absolute;
        left: 0.6rem;
        bottom: 0.3rem;
        font-size: 2rem;
        font-weight: 600;
        color: ${Colors.white};
    }
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
