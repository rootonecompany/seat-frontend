"use client";

import BoundaryWrap from "@/components/template/BoundaryWrap";
import { Colors } from "@/styles/Colors";
import styled from "styled-components";

export default function DetailInfo() {
    return (
        <BoundaryWrap padding="1.1rem">
            <Block>
                <TitleWrap>
                    <h2>2023 조용필＆위대한탄생 콘서트_[대구]</h2>
                    <span>콘서트·120분·만 7세이상</span>
                </TitleWrap>
                <SubDetailWrap>
                    <div>
                        <span>공연장소</span>
                        <strong>대구 스타디움 주경기장</strong>
                    </div>
                    <div>
                        <span>공연기간</span>
                        <strong>2023.05.27 ~ 2023.05.31</strong>
                    </div>
                </SubDetailWrap>
            </Block>
        </BoundaryWrap>
    );
}

const Block = styled.div`
    padding: 3.8rem 0.9rem 0;
`;
const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-bottom: 1.1rem;
    border-bottom: 1px solid ${Colors.line2};

    h2 {
        font-size: 1.1rem;
        line-height: 1.3;
        font-weight: 600;
        color: ${Colors.black3};
    }
    span {
        font-size: 0.7rem;
        font-weight: 400;
        color: ${Colors.black2};
    }
`;
const SubDetailWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-top: 1.1rem;

    & > div {
        display: flex;
        align-items: center;
        gap: 1rem;

        span,
        strong {
            font-size: 0.7rem;
            font-weight: 400;
            line-height: 1.3;
            color: ${Colors.black1};
        }
        strong {
            color: ${Colors.black3};
        }
    }
`;
