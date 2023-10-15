"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import HeaderBackButton from "./HeaderBackButton";
import HeaderButtonGroup from "./HeaderButtonGroup";

interface Props {
    title?: string;
    label?: string;
    optionButton?: boolean;
}

export default function PrevHeader({ title, label, optionButton }: Props) {
    return (
        <Block>
            <HeaderBackButton />
            {label && <span>{label}</span>}
            {title && <h2>{title}</h2>}
            {optionButton && <HeaderButtonGroup />}
        </Block>
    );
}

const Block = styled.div`
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
    }
`;