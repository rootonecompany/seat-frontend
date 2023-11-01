"use client";

import SpeechBubble from "../SpeechBubble";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

export default function MyTicketNone() {
    return (
        <Block>
            <NoneBlock>
                <p>😢</p>
                <h4>티켓을 예매해주세요</h4>
                <span>현재 보유한 티켓이 없습니다.</span>
            </NoneBlock>
            <SpeechBubble>티켓을 예매해주세요!</SpeechBubble>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    width: 100%;
    min-height: 6.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.line2};
    margin-top: 0.9rem;
`;

const NoneBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > p {
        font-size: 1.1rem;
        line-height: 1.3;
    }
    & > h4 {
        font-size: 0.7rem;
        font-weight: 600;
        color: ${Colors.black3};
        margin: 0.2rem 0;
        line-height: 1.2;
    }
    & > span {
        font-size: 0.7rem;
        font-weight: 400;
        color: ${Colors.black2};
    }
`;
