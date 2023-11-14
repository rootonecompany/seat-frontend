"use client";

import SwipperWrapper from "../../../../../components/swiper/SwiperWrapper";
import { SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import { TicketRankType } from "@/interface/data.type";

interface Props {
    item: TicketRankType[];
    tab: number;
    handleChangeTab: (id: number) => void;
}

const options: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 6,
};

export default function TicketRankTabButton({
    item,
    tab,
    handleChangeTab,
}: Props) {
    return (
        <TabButtonWrapper>
            {/* <SwipperWrapper {...options}>
                {item.map((item, index) => (
                    <SwiperSlide key={item.distributor}>
                        <TabStyledButton
                            onClick={() => handleChangeTab(index)}
                            className={tab === index ? "active" : ""}
                        >
                            {item.distributor}
                        </TabStyledButton>
                    </SwiperSlide>
                ))}
            </SwipperWrapper> */}
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
