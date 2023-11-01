"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

import SpeechBubbleBackground from "public/images/bg/bg_text.png";

interface Props {
    children: React.ReactNode;
}

export default function SpeechBubble({ children }: Props) {
    return (
        <SpeechBubbleWrap>
            <div>{children}</div>
        </SpeechBubbleWrap>
    );
}

const SpeechBubbleWrap = styled.div`
    position: absolute;
    left: 4.6rem;
    top: -2.2rem;
    padding: 0.5rem 0.45rem 0.6rem;
    background: url(${SpeechBubbleBackground.src}) no-repeat center / 100% 100%;

    div {
        width: 100%;
        font-size: 0.6rem;
        font-weight: 600;
        color: ${Colors.white};
    }
`;
