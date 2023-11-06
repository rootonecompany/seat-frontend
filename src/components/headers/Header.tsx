"use client";

import { useRecoilValue } from "recoil";
import MainHeader from "./MainHeader";
import { headerScrollState } from "@/recoil/atom";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    headerContent?: React.ReactNode;
    overlap?: boolean;
}

export default function Header({
    headerContent = <MainHeader />,
    overlap = false,
}: Props) {
    const isScroll = useRecoilValue(headerScrollState);

    return (
        <>
            <Block $overlap={overlap} $scroll={isScroll}>
                {headerContent}
            </Block>
            {!overlap && <HeaderFixedPadidng />}
        </>
    );
}

const Block = styled.header<{ $overlap: boolean; $scroll: boolean }>`
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
    max-width: 768px;
    height: 3.6rem;
    display: flex;
    align-items: center;
    background-color: ${Colors.white};
    z-index: 9999;

    transition: background 0.15s ease-in-out;

    ${({ $overlap }) => $overlap && ` background-color: transparent;`}
    ${(props) =>
        props.$overlap && props.$scroll && `background-color: ${Colors.white};`}
`;

const HeaderFixedPadidng = styled.div`
    padding-top: 3.6rem;
`;
