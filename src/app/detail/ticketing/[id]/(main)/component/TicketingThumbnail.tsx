"use client";

import DetailThumbnail from "@/app/detail/[id]/(main)/detail/DetailThumbnail";
import { Colors } from "@/styles/Colors";
import styled from "styled-components";

export default function TicketingThumbanil() {
    return (
        <DetailThumbnail>
            <TicketingTitleWrap>
                <h6>2023 조용필＆위대한탄생 콘서트_[대구]</h6>
                <span>대구 스타디움 주경기장</span>
            </TicketingTitleWrap>
        </DetailThumbnail>
    );
}

const TicketingTitleWrap = styled.div`
    width: 100%;
    height: calc(100% - 3.6rem);
    position: absolute;
    left: 0;
    top: 3.6rem;
    padding: 0 0.9rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.6rem;
    z-index: 300;

    h6 {
        font-size: 1rem;
        line-height: 1.3;
        font-weight: 600;
        color: ${Colors.white};
        word-break: keep-all;
    }
    span {
        font-size: 0.7rem;
        font-weight: 400;
        color: ${Colors.white};
    }
`;
