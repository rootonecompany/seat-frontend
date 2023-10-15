"use client";

import styled from "styled-components";
import MainHeader from "./MainHeader";
import { Colors } from "@/styles/Colors";

interface Props {
    headerContent?: React.ReactNode;
}

export default function Header({ headerContent = <MainHeader /> }: Props) {
    return (
        <>
            <Block>{headerContent}</Block>
            <HeaderFixedPadidng />
        </>
    );
}

const Block = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 3.6rem;
    display: flex;
    align-items: center;
    background-color: ${Colors.white};
    z-index: 9999;
`;

const HeaderFixedPadidng = styled.div`
    padding-top: 3.6rem;
`;
