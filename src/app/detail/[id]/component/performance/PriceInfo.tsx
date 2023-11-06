"use client";

import Title from "@/components/Title";
import { Colors } from "@/styles/Colors";
import styled from "styled-components";

export default function PriceInfo() {
    return (
        <Block>
            <TitleWrapper tag="h3" title="PRICE" />
            <PriceWrapper>
                <PriceItem>
                    <Seat>VIP석</Seat>
                    <Price>180,000원</Price>
                </PriceItem>
                <PriceItem>
                    <Seat>R석</Seat>
                    <Price>140,000원</Price>
                </PriceItem>
                <PriceItem>
                    <Seat>S석</Seat>
                    <Price>120,000원</Price>
                </PriceItem>
                <PriceItem>
                    <Seat>A석</Seat>
                    <Price>90,000원</Price>
                </PriceItem>
            </PriceWrapper>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 1.6rem;
`;
const TitleWrapper = styled(Title)`
    padding-bottom: 0.9rem;
    border-bottom: 1px solid ${Colors.line2};
`;
const PriceWrapper = styled.div`
    margin-top: 0.9rem;
    border: 1px solid ${Colors.line3};
`;
const PriceItem = styled.div`
    display: flex;
    align-items: center;

    &:not(:last-child) {
        border-bottom: 1px solid ${Colors.line3};
    }
`;
const Seat = styled.span`
    min-width: 3.7rem;
    padding: 0.65rem 0 0.55rem;
    text-align: center;
    font-size: 0.7rem;
    font-weight: 400;
    color: ${Colors.black3};
    background-color: ${Colors.gray2};
`;
const Price = styled.strong`
    flex: 1;
    padding-right: 0.8rem;
    text-align: right;
    font-size: 0.7rem;
    font-weight: 600;
    color: ${Colors.black3};
`;
