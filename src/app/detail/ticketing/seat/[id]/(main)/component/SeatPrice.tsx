"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

export default function SeatPrice() {
    return (
        <Block>
            <PriceWrapper>
                <PriceItem>
                    <PriceTitle>
                        <Square $bg="#7b67ee" />
                        <h6>VIP석</h6>
                    </PriceTitle>
                    <span>167,000원</span>
                </PriceItem>
                <PriceItem>
                    <PriceTitle>
                        <Square $bg="#1ea813" />
                        <h6>R석</h6>
                    </PriceTitle>
                    <span>145,000원</span>
                </PriceItem>
                <PriceItem>
                    <PriceTitle>
                        <Square $bg="#1bb3fe" />
                        <h6>S석</h6>
                    </PriceTitle>
                    <span>110,000원</span>
                </PriceItem>
                <PriceItem>
                    <PriceTitle>
                        <Square $bg="#fa7e4d" />
                        <h6>A석</h6>
                    </PriceTitle>
                    <span>75,000원</span>
                </PriceItem>
            </PriceWrapper>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 0.7rem;
`;
const PriceWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.95rem 0.7rem 1rem;
    border-radius: 0.3rem;
    background-color: ${Colors.disabled1};
`;
const PriceItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 0.7rem;
        font-weight: 400;
        color: ${Colors.black3};
    }
`;
const PriceTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h6 {
        font-size: 0.7rem;
        font-weight: 700;
        color: ${Colors.black3};
    }
`;
const Square = styled.div<{ $bg: string }>`
    width: 0.7rem;
    height: 0.7rem;
    background-color: ${(props) => props.$bg};
`;
