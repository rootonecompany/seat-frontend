"use client";

import Input, { type Props as InputProps } from "./Input";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props extends InputProps {
    label: string;
}

export default function LabelInput({ label, ...rest }: Props) {
    return (
        <Block>
            <StyleLabel htmlFor={rest.id}>{label}</StyleLabel>
            <Input {...rest} />
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;
const StyleLabel = styled.label`
    font-size: 0.7rem;
    font-weight: 600;
    color: ${Colors.black2};
`;
