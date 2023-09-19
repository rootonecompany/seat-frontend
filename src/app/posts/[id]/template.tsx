"use client";

import styled, { keyframes } from "styled-components";

interface TemplateProps {
    children: React.ReactNode;
}
export default function Template({ children }: TemplateProps) {
    return <Block>{children}</Block>;
}
const FadeInOut = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Block = styled.div`
    animation: ${FadeInOut} 0.5s ease-in-out;
`;
