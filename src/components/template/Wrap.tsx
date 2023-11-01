"use client";

import styled, { css } from "styled-components";

interface Props {
    children: React.ReactNode;
    fullWidth?: boolean;
    height?: "full" | "normal" | undefined;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
}

export default function Wrap({
    children,
    fullWidth = false,
    height,
    className,
    as,
}: Props) {
    return (
        <Block
            $dynamicSize={fullWidth}
            $height={height}
            className={className}
            as={as}
        >
            {children}
        </Block>
    );
}

const Block = styled.div<{
    $dynamicSize: boolean;
    $height: "full" | "normal" | undefined;
}>`
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
    ${(props) =>
        props.$height === "full" &&
        css`
            height: 100vh;
        `}
`;
