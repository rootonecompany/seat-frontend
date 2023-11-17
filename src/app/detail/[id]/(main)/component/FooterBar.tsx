"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

import HeartOn from "public/images/icons/icon_heart_on.png";
import HeartOff from "public/images/icons/icon_heart_off.png";
import Share from "public/images/icons/icon_share.png";
import { useDynamicRouter } from "@/hooks/useDynamicRoute";

export default function FooterBar() {
    const { id, handleDynamicRouter } = useDynamicRouter();
    const [isLike, setIsLike] = useState(false);
    const handleToggleLike = () => {
        setIsLike(!isLike);
    };

    return (
        <>
            <FooterBarWrapper>
                <FooterBarInner>
                    <div>
                        <button onClick={handleToggleLike}>
                            <Image
                                src={isLike ? HeartOn : HeartOff}
                                width={20}
                                height={17}
                                alt="좋아요"
                            />
                        </button>
                        <button>
                            <Image
                                src={Share}
                                width={20}
                                height={20}
                                alt="공유하기"
                            />
                        </button>
                    </div>
                    <TicketingButton
                        onClick={() => {
                            handleDynamicRouter(`/detail/ticketing/${id}`);
                        }}
                    >
                        예매하기
                    </TicketingButton>
                </FooterBarInner>
            </FooterBarWrapper>
            <FooterBarPadding />
        </>
    );
}

const FooterBarWrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4.4rem;
    padding: 0.9rem 0.95rem;
    background-color: ${Colors.white};
    z-index: 9999;
    box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.05);
`;
const FooterBarPadding = styled.div`
    padding-bottom: 4.4rem;
`;
const FooterBarInner = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & > div {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            border: 1px solid ${Colors.line5};
        }
    }
`;
const TicketingButton = styled.button`
    width: 100%;
    height: 2.5rem;
    border-radius: 0.3rem;
    background-color: ${Colors.primary};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};
`;
