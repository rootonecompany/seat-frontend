"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    title?: string;
    text?: string;
    cancelText?: string;
    basicText?: string;
    close?: () => void;
    onPageMove?: () => void;
}

export default function ButtonModal({
    title,
    text,
    cancelText,
    basicText,
    onPageMove,
    close,
}: Props) {
    return (
        <Block>
            <WraningWrapper>
                <h6>{title}</h6>
                <span>{text}</span>
            </WraningWrapper>
            <ButtonGroup $line={cancelText}>
                {cancelText && (
                    <CancelButton onClick={close}>{cancelText}</CancelButton>
                )}
                <BasicButton
                    onClick={() => {
                        onPageMove && onPageMove();
                        close && close();
                    }}
                >
                    {basicText}
                </BasicButton>
            </ButtonGroup>
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
const ButtonGroup = styled.div<{ $line: string | undefined }>`
    position: relative;
    display: flex;
    align-items: center;

    button {
        flex: 1;
    }

    &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 1px;
        height: 100%;
        background-color: ${Colors.line2};
    }
    ${({ $line }) =>
        $line === undefined &&
        `
        &::before {
            display: none;
        }
            `}
`;
const CancelButton = styled.button`
    width: 100%;
    height: 2.5rem;
    background-color: ${Colors.white};
    border-radius: 0.2rem;
    font-size: 0.7rem;
    font-weight: 600;
    color: ${Colors.black3};
`;
const BasicButton = styled.button`
    width: 100%;
    height: 2.5rem;
    background-color: ${Colors.white};
    border-radius: 0.2rem;
    font-size: 0.7rem;
    font-weight: 600;
    color: ${Colors.primary};
`;
