"use client";

import styled, { keyframes } from "styled-components";

interface Props {
    close?: () => void;
    component?: () => JSX.Element;
}

export default function CustomModalForm({ close, component }: Props) {
    return (
        <Block>
            <Overlay onClick={close} />
            <Modal>{component && component()}</Modal>
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
    animation: ${fadeIn} 0.25s ease-in-out;
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
const Modal = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background: white;
    z-index: 1000;
`;
