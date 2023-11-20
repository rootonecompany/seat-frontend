"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import { useDynamicRouter } from "@/hooks/useDynamicRoute";

export default function SeatDetailTitle() {
    const { seatId } = useDynamicRouter();
    return (
        <Block>
            <SeatNameWrapper>
                <span>{seatId} 영역</span>의 좌석배치도
            </SeatNameWrapper>
            <SeatStateWrapper>
                <SeatState>
                    <div className="square state_01"></div>
                    <span>예매가능</span>
                </SeatState>
                <SeatState>
                    <div className="square state_02"></div>
                    <span>예매중</span>
                </SeatState>
                <SeatState>
                    <div className="square state_03"></div>
                    <span>예매완료</span>
                </SeatState>
            </SeatStateWrapper>
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0.9rem;
    background-color: ${Colors.disabled1};
`;
const SeatNameWrapper = styled.div`
    width: 100%;
    font-size: 0.6rem;
    font-weight: 500;
    color: ${Colors.black3};

    span {
        color: ${Colors.primary};
    }
`;
const SeatStateWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`;
const SeatState = styled.div`
    display: flex;
    align-items: center;
    gap: 0.1rem;
    .square {
        width: 0.6rem;
        height: 0.6rem;

        &.state_01 {
            background-color: ${Colors.primary};
        }
        &.state_02 {
            background-color: ${Colors.subprimary};
        }
        &.state_03 {
            background-color: ${Colors.disabled0};
            border: 1px solid ${Colors.line7};
        }
    }
    span {
        font-size: 0.5rem;
        font-weight: 300;
        color: ${Colors.black2};
        white-space: nowrap;
    }
`;
