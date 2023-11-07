"use client";

import Title from "@/components/Title";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

export default function SalesInfo() {
    return (
        <div>
            <TitleWrapper tag="h3" title="판매정보" />
            <SalesInfoWrapper>
                <SalesInfoItem>
                    <h6>주최 : </h6>
                    <span>오페라의유령문화산업전문회사</span>
                </SalesInfoItem>
                <SalesInfoItem>
                    <h6>제작 : </h6>
                    <span>the really useful group, lotte enter</span>
                </SalesInfoItem>
                <SalesInfoItem>
                    <h6>제작투자 : </h6>
                    <span>대구,기업은행, / 협찬 : 펀드슈퍼마켓</span>
                </SalesInfoItem>
            </SalesInfoWrapper>
        </div>
    );
}

const TitleWrapper = styled(Title)`
    padding-bottom: 0.9rem;
    border-bottom: 1px solid ${Colors.line2};
`;
const SalesInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin-top: 0.9rem;
`;
const SalesInfoItem = styled.div`
    display: flex;
    align-items: center;

    h6,
    span {
        font-size: 0.7rem;
        line-height: 1.2;
        font-weight: 300;
        color: ${Colors.black2};
    }
`;
