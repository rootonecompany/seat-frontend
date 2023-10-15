"use client";

import styled from "styled-components";
import Image from "next/image";
import { useGoBack } from "@/hooks/useGoBack";

import Prev from "/public/images/icons/icon_prev.png";

export default function HeaderBackButton() {
    const goBack = useGoBack();

    return (
        <BackButton onClick={goBack}>
            <Image src={Prev} width={34} height={34} alt="뒤로가기" />
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
