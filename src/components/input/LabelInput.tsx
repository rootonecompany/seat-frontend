"use client";

import { Colors } from "@/styles/Colors";
import Input, { type Props as InputProps } from "./Input";
import styled from "styled-components";

interface Props extends InputProps {
    label: string;
}

export default function LabelInput({ label, ...rest }: Props) {
    return (
        <Block>
            <StyleLabel>{label}</StyleLabel>
            <Input {...rest} />
        </Block>
    );
}

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;
export const StyleLabel = styled.label`
    font-size: 0.7rem;
    font-weight: 600;
    color: ${Colors.black3};
`;
