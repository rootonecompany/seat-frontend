"use client";

import styled, { css } from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    children: React.ReactNode;
    padding?: string | undefined;
    borderNone?: boolean;
}

export default function BoundaryWrap({
    children,
    padding,
    borderNone = false,
}: Props) {
    return (
        <Block $padding={padding} $border={borderNone}>
            {children}
        </Block>
    );
}

const Block = styled.div<{
    $padding: string | undefined;
    $border: boolean | undefined;
}>`
    width: 100%;
    padding-bottom: ${(props) => props.$padding && props.$padding};
    border-bottom: 0.5rem solid ${Colors.gray2};

    ${(props) =>
        props.$border &&
        css`
            border: none;
        `}
`;
