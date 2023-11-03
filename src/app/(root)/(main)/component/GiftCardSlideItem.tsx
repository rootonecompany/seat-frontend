"use client";

import { StaticImageData } from "next/image";
import { GiftCardType } from "@/interface";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    item: GiftCardType;
}

export default function GiftCardSlideItem({ item }: Props) {
    const { title, price, discount, image } = item;
    return (
        <GiftCardWrapper>
            <GiftCard>
                <GiftCardImage $thumbnail={image} />
            </GiftCard>
            <GiftCardInfoWrap>
                <h6>{title}</h6>
                <span>
                    {discount && <span>{discount}</span>}
                    {price}
                </span>
            </GiftCardInfoWrap>
        </GiftCardWrapper>
    );
}

const GiftCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const GiftCard = styled.div`
    padding: 2.1rem 0.9rem;
    background-color: ${Colors.gray0};
    border-radius: 0.3rem;
`;
const GiftCardImage = styled.div<{ $thumbnail: StaticImageData }>`
    max-width: 100%;
    height: 0;
    padding-bottom: calc(50 / 98 * 100%);
    background: ${(props) => `url(${props.$thumbnail.src})`} no-repeat center /
        cover;
    border-radius: 0.4rem;
    overflow: hidden;
`;
const GiftCardInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-top: 0.4rem;

    & > h6 {
        font-size: 0.7rem;
        font-weight: 400;
        line-height: 1.4;
        color: ${Colors.black2};
        word-break: keep-all;
    }
    & > span {
        font-size: 0.8rem;
        font-weight: 600;
        color: ${Colors.black3};

        span {
            color: ${Colors.primary};
            margin-right: 0.2rem;
        }
    }
`;
