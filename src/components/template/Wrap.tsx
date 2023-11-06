"use client";

import { useCallback, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { headerScrollState } from "@/recoil/atom";
import styled, { css } from "styled-components";

interface Props {
    children: React.ReactNode;
    fullWidth?: boolean;
    height?: "full" | "normal" | undefined;
    fullHeight?: boolean;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
}

export default function Wrap({
    children,
    fullWidth = false,
    fullHeight = false,
    height,
    className,
    as,
}: Props) {
    const setIsScroll = useSetRecoilState(headerScrollState);
    const handleScroll = useCallback(() => {
        if (window.scrollY > 0) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    }, [setIsScroll]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <Block
            $dynamicSize={fullWidth}
            $height={height}
            $fullHeight={fullHeight}
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
    $fullHeight: boolean;
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
    ${(props) =>
        props.$fullHeight &&
        css`
            min-height: 100vh;
        `}
`;
