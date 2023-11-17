"use client";

import HeaderButtonGroup from "./HeaderButtonGroup";
import HeaderBackButton from "./HeaderBackButton";
import { useRecoilValue } from "recoil";
import { headerScrollState } from "@/recoil/atom";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    title?: string;
    label?: string;
    optionButton?: boolean;
    overlap?: boolean;
}

export default function PrevHeader({
    title,
    label,
    optionButton,
    overlap = false,
}: Props) {
    const isScroll = useRecoilValue(headerScrollState);
    return (
        <Block $isOption={optionButton}>
            <HeaderBackButton overlap={overlap} />
            {overlap ? (
                isScroll ? (
                    <span>{label}</span>
                ) : null
            ) : (
                <span>{label}</span>
            )}
            {title && <h2>{title}</h2>}
            {optionButton && <HeaderButtonGroup overlap={overlap} />}
        </Block>
    );
}

const Block = styled.div<{ $isOption: boolean | undefined }>`
    position: relative;
    width: 100%;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 0.8rem;
        font-weight: 500;
        color: ${Colors.black3};
    }

    span {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        padding: 0 5.5rem 0 2.6rem;
        font-size: 0.8rem;
        font-weight: 500;
        color: ${Colors.black3};

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

        ${({ $isOption }) =>
            !$isOption &&
            `
            padding-right:0.9rem;
        `}
    }
`;
