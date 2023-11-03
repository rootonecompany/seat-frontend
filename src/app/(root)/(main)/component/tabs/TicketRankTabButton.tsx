"use client";

import SwipperWrapper from "../../../../../components/swiper/SwiperWrapper";
import { SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { TicketRankType } from "@/interface";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    item: TicketRankType[];
    tab: number;
    onClickTab: (id: number) => void;
}

const options: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 6,
};

export default function TicketRankTabButton({ item, tab, onClickTab }: Props) {
    return (
        <TabButtonWrapper>
            <SwipperWrapper {...options}>
                {item.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <TabStyledButton
                            onClick={() => onClickTab(item.id)}
                            className={tab === index + 1 ? "active" : ""}
                        >
                            {item.name}
                        </TabStyledButton>
                    </SwiperSlide>
                ))}
            </SwipperWrapper>
        </TabButtonWrapper>
    );
}

const TabButtonWrapper = styled.div`
    .swiper-slide {
        width: fit-content;
    }
`;

const TabStyledButton = styled.div`
    min-width: fit-content;
    padding: 0.55rem 0.9rem 0.5rem;
    border-radius: 1rem;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.line3};
    font-size: 0.7rem;
    font-weight: 500;
    color: ${Colors.black3};

    &.active {
        background-color: ${Colors.primary};
        border-color: ${Colors.primary};
        color: ${Colors.white};
    }
    cursor: pointer;
`;
