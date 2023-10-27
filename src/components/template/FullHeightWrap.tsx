"use client";

import styled from "styled-components";

interface Props {
    children: React.ReactNode;
}

export default function FullHeightWrap({ children }: Props) {
    return <Block>{children}</Block>;
}

const Block = styled.div`
    width: 100%;
    height: calc(100% - 3.6rem);
    display: flex;
    flex-direction: column;
`;
