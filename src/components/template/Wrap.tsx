"use client";

import styled, { css } from "styled-components";

interface Props {
    children: React.ReactNode;
    fullWidth?: boolean;
    height?: "full" | "normal";
}

export default function Wrap({
    children,
    fullWidth = false,
    height = "full",
}: Props) {
    return (
        <Block $dynamicSize={fullWidth} $height={height}>
            {children}
        </Block>
    );
}

const Block = styled.div<{ $dynamicSize: boolean; $height: "full" | "normal" }>`
    width: 100%;
    height: inherit;
    padding: 0 0.9rem;
    ${(props) =>
        props.$dynamicSize &&
        css`
            padding: 0;
        `}
    ${(props) =>
        props.$height === "normal" &&
        css`
            height: fit-content;
        `}
`;
