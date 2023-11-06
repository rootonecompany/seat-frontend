"use client";

import PerformanceInfo from "./PerformanceInfo";
import SalesInfo from "./SalesInfo";
import ReviewInfo from "./ReviewInfo";

import styled from "styled-components";

const TabContents = [
    <PerformanceInfo key="performance" />,
    <SalesInfo key="sales" />,
    <ReviewInfo key="review" />,
];

interface Props {
    tab: number;
}

export default function TabBody({ tab }: Props) {
    const TabContent = TabContents[tab];
    return <TabContentWrapper>{TabContent}</TabContentWrapper>;
}

const TabContentWrapper = styled.div`
    padding-top: 1.4rem;
`;
