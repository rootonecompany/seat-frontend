"use client";
import { ChildrenProps } from "@/interface";
import styled from "styled-components";

export default function BasicLayout({ children }: ChildrenProps) {
    return <Block>{children}</Block>;
}

const Block = styled.div`
    width: 100%;
    max-width: 768px;
    height: 100%;
    margin: 0 auto;
    overflow-y: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
