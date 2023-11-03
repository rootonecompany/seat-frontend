"use client";

import Image from "next/image";
import SpeechBubble from "../../../../../components/SpeechBubble";
import { MyTicketType } from "@/interface";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    item: MyTicketType;
}

export default function MyTicketListItem({ item }: Props) {
    const { d_day, mainTitle, address, date, time, image } = item;

    return (
        <Block>
            <TicketInfoWrap>
                <span className="d_day">{d_day}</span>
                <strong>{mainTitle}</strong>
                <p>{address}</p>
                <div className="date">
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
            </TicketInfoWrap>
            <Image src={image} width={64} height={80} alt="영탁 단독 콘서트" />
            <SpeechBubble>예매한 티켓을 확인해보세요!</SpeechBubble>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    width: 100%;
    min-height: 6.3rem;
    display: flex;
    align-items: center;
    gap: 1.3rem;
    padding: 0.85rem 1rem 1rem;
    border-radius: 0.3rem;
    background-color: ${Colors.disabled1};
    border: 1px solid ${Colors.line4};
    margin-top: 0.9rem;

    img {
        min-width: 3.2rem;
    }
`;
const TicketInfoWrap = styled.div`
    display: flex;
    flex-direction: column;

    .d_day {
        width: fit-content;
        padding: 0.1rem 0.4rem;
        background-color: ${Colors.white};
        border-radius: 0.5rem;
        border: 1px solid ${Colors.subprimary};
        font-size: 0.55rem;
        font-weight: 700;
        color: ${Colors.subprimary};
    }

    strong {
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 1.2;
        color: ${Colors.black4};
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        margin: 0.3rem 0 0.2rem;
    }
    p {
        font-size: 0.7rem;
        font-weight: 400;
        line-height: 1.1;
        color: ${Colors.black1};
    }

    .date {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        margin-top: 0.5rem;

        span {
            position: relative;
            font-size: 0.7rem;
            font-weight: 400;
            color: ${Colors.black2};
        }
        span:first-child:after {
            content: "";
            position: absolute;
            right: -0.3rem;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 0.6rem;
            background-color: ${Colors.black1};
        }
    }
`;
