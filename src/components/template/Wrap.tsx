"use client";

import styled, { css } from "styled-components";

interface Props {
    children: React.ReactNode;
    fullWidth?: boolean;
}

export default function Wrap({ children, fullWidth = false }: Props) {
    return <Block $dynamicSize={fullWidth}>{children}</Block>;
}

const Block = styled.div<{ $dynamicSize: boolean }>`
    width: 100%;
    padding: 0 0.9rem;

    ${(props) =>
        props.$dynamicSize &&
        css`
            padding: 0;
        `}
`;
