"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean | undefined;
}

export default function SelectDateButton({ active, ...rest }: Props) {
    return <SelectDateStyledButton $active={active} {...rest} />;
}

const SelectDateStyledButton = styled.button<{ $active: boolean | undefined }>`
    height: 2.4rem;
    border-radius: 0.2rem;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.line3};
    font-size: 0.7rem;
    font-weight: 400;
    color: ${Colors.black3};

    &:disabled {
        border: 1px solid ${Colors.disabled1};
        background-color: ${Colors.disabled1};
        color: ${Colors.black1};
    }

    ${({ $active }) =>
        $active &&
        `
        border: 1px solid ${Colors.primary};
        color: ${Colors.primary};
        font-weight: 600;
    `}
`;
