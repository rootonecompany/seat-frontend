"use client";

import Image from "next/image";
import { useGoBack } from "@/hooks/useGoBack";
import { useRecoilValue } from "recoil";
import { headerScrollState } from "@/recoil/atom";
import styled from "styled-components";

import Prev from "/public/images/icons/icon_prev.png";
import PrevWhite from "/public/images/icons/icon_prev_white.png";

interface Props {
    overlap?: boolean;
}

export default function HeaderBackButton({ overlap = false }: Props) {
    const goBack = useGoBack();
    const isScroll = useRecoilValue(headerScrollState);

    return (
        <BackButton onClick={goBack}>
            {overlap ? (
                <Image
                    src={isScroll ? Prev : PrevWhite}
                    width={34}
                    height={34}
                    alt="뒤로가기"
                />
            ) : (
                <Image src={Prev} width={34} height={34} alt="뒤로가기" />
            )}
        </BackButton>
    );
}

const BackButton = styled.button`
    position: absolute;
    left: 0;
    top: 0;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 0.35rem;
`;
