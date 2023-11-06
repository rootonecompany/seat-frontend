"use client";

import Title from "@/components/Title";
import { Colors } from "@/styles/Colors";
import styled from "styled-components";
import PriceInfo from "../component/performance/PriceInfo";

export default function PerformanceInfo() {
    return (
        <div>
            <TitleWrapper tag="h3" title="공연 정보/상세" />
            <DetailWrapper>상세페이지</DetailWrapper>
            <PriceInfo />
        </div>
    );
}

const TitleWrapper = styled(Title)`
    padding-bottom: 0.9rem;
    border-bottom: 1px solid ${Colors.line2};
`;
const DetailWrapper = styled.div`
    width: 100%;
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.9rem;
    background-color: ${Colors.disabled2};
    font-size: 0.7rem;
    font-weight: 400;
    color: ${Colors.black1};
`;
