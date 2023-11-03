"use client";

import Wrap from "@/components/template/Wrap";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import PopularSwiper from "@/app/(root)/(main)/component/PopularSwiper";
import Button from "@/components/Button";

import More from "public/images/icons/icon_more_dark.png";
import Image from "next/image";

export default function PopularTickets() {
    return (
        <Wrap fullWidth={true}>
            <TitleWrap>
                <h2>오늘의 인기 티켓 🔥</h2>
                <span>지금 가장 인기있는 HOT한 공연</span>
            </TitleWrap>
            <PopularSwiper />
            <MoreButtonWrap>
                <MoreButton sizeType="more">
                    <span>인기 티켓 더보기</span>
                    <Image
                        src={More}
                        width={8}
                        height={12}
                        alt="인기 티켓 더보기"
                    />
                </MoreButton>
            </MoreButtonWrap>
        </Wrap>
    );
}

const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 1.5rem 0 0 0.9rem;

    & > h2 {
        font-size: 1rem;
        font-weight: 700;
        color: ${Colors.black3};
        line-height: 1.5;
    }
    & > span {
        font-size: 0.7rem;
        font-weight: 400;
        color: ${Colors.black2};
    }
`;
const MoreButtonWrap = styled.div`
    padding: 0 0.9rem;
    margin-top: 1.2rem;
`;
const MoreButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.line3};

    span {
        font-size: 0.65rem;
        font-weight: 600;
        color: ${Colors.black3};
        margin-top: 0.05rem;
    }
`;
