"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    text: string;
    close?: () => void;
}

export default function FailModal({ text, close }: Props) {
    return (
        <Block>
            <WraningWrapper>
                <span>{text}</span>
            </WraningWrapper>
            <ConfirmButton onClick={close}>확인</ConfirmButton>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem 0.5rem;
`;
const WraningWrapper = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
    span {
        font-size: 0.7rem;
        font-weight: 500;
        color: ${Colors.black3};
    }
`;
const ConfirmButton = styled.button`
    width: 100%;
    height: 2rem;
    background-color: ${Colors.primary};
    border-radius: 0.2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};
`;
