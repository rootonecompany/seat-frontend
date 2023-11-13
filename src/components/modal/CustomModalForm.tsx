"use client";

import styled, { keyframes } from "styled-components";

interface Props {
    close?: () => void;
    component?: () => React.ReactNode;
}

export default function CustomModalForm({ close, component }: Props) {
    return (
        <Block>
            <Overlay onClick={close} />
            <ModalContent>{component && component()}</ModalContent>
        </Block>
    );
}

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Block = styled.div`
    position: relative;
    animation: ${fadeIn} 0.25s ease-in-out;
    z-index: 9999;
`;
const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
`;
const ModalContent = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
    background: white;
    border-radius: 0.3rem;
    overflow: hidden;
    z-index: 1000;
`;
