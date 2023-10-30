"use client";

import Input, { type Props as InputProps } from "./Input";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props extends InputProps {
    label: string;
    children?: React.ReactNode;
}

export default function LabelInput({
    label,
    children,
    className,
    ...rest
}: Props) {
    return (
        <Block className={className}>
            <StyleLabel htmlFor={rest.id}>{label}</StyleLabel>
            {children ? (
                <InputButtonBlock>
                    <Input {...rest} />
                    {children}
                </InputButtonBlock>
            ) : (
                <Input {...rest} />
            )}
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
const InputButtonBlock = styled.div`
    position: relative;
`;
