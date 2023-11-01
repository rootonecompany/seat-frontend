"use client";
import { ChildrenProps } from "@/interface";
import styled from "styled-components";

export default function BasicLayout({ children }: ChildrenProps) {
    return <Block>{children}</Block>;
}

const Block = styled.div`
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
`;
