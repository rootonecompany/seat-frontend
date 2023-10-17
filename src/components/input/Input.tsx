"use client";

import React from "react";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: Props) {
    return <StyleInput {...rest} />;
}

const StyleInput = styled.input`
    width: 100%;
    height: 2.4rem;
    border-radius: 0.2rem;
    border: 1px solid ${Colors.line3};
    padding: 0.8rem;
    font-size: 0.7rem;
    font-weight: 400;
    color: ${Colors.black3};

    &::placeholder {
        color: ${Colors.placeholder};
    }
`;
