"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    title?: string;
    text?: string;
    close?: () => void;
}

export default function FailModal({ title, text, close }: Props) {
    return (
        <Block>
            <WraningWrapper>
                <h6>{title}</h6>
                <span>{text}</span>
            </WraningWrapper>
            <ConfirmButton onClick={close}>확인</ConfirmButton>
        </Block>
    );
}

const Block = styled.div`
    min-width: 16.2rem;
    display: flex;
    flex-direction: column;
`;
const WraningWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    padding: 2.4rem 0 1.9rem;
    border-bottom: 1px solid ${Colors.line2};
    h6 {
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1.3;
        color: ${Colors.black3};
    }
    span {
        font-size: 0.7rem;
        font-weight: 400;
        color: ${Colors.black2};
    }
`;
const ConfirmButton = styled.button`
    width: 100%;
    height: 2.5rem;
    background-color: ${Colors.white};
    border-radius: 0.2rem;
    font-size: 0.7rem;
    font-weight: 600;
    color: ${Colors.primary};
`;
