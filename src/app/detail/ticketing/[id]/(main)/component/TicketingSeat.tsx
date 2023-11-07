"use client";

import Image from "next/image";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

import MoreWhite from "public/images/icons/icon_more_white.png";

export default function TicketingSeat() {
    return (
        <Block>
            <SeatHeader>
                <span>오후 7:30</span>
                <button>
                    좌석선택
                    <Image
                        src={MoreWhite}
                        width={8}
                        height={12}
                        alt="좌석선택"
                    />
                </button>
            </SeatHeader>
            <SeatBody>
                <SeatItem>
                    <Seat>VIP석</Seat>
                    <Count $state={false}>만석</Count>
                </SeatItem>
                <SeatItem>
                    <Seat>R석</Seat>
                    <Count $state>1석</Count>
                </SeatItem>
                <SeatItem>
                    <Seat>S석</Seat>
                    <Count $state>102석</Count>
                </SeatItem>
                <SeatItem>
                    <Seat>A석</Seat>
                    <Count $state>87석</Count>
                </SeatItem>
            </SeatBody>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 1.35rem;
`;
const SeatHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 1rem;
        font-weight: 600;
        color: ${Colors.primary};
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        width: 4.75rem;
        height: 1.9rem;
        background-color: ${Colors.primary};
        border-radius: 1rem;

        font-size: 0.7rem;
        font-weight: 700;
        color: ${Colors.white};
    }
`;
const SeatBody = styled.div`
    margin-top: 0.8rem;
    border: 1px solid ${Colors.line3};
`;
const SeatItem = styled.div`
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
const Count = styled.strong<{ $state: boolean | undefined }>`
    flex: 1;
    padding-right: 0.8rem;
    text-align: right;
    font-size: 0.7rem;
    font-weight: 600;
    color: ${Colors.subprimary};

    ${({ $state }) =>
        !$state &&
        `
        color: ${Colors.black1};
    `}
`;
