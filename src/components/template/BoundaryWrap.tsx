"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    children: React.ReactNode;
    padding?: string | undefined;
}

export default function BoundaryWrap({ children, padding }: Props) {
    return <Block $padding={padding}>{children}</Block>;
}

const Block = styled.div<{ $padding: string | undefined }>`
    width: 100%;
    padding-bottom: ${(props) => props.$padding && props.$padding};
    border-bottom: 0.5rem solid ${Colors.gray2};
`;
