"use client";

import Button from "./Button";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Prosp {
    children: React.ReactNode;
}

export default function MoreButton({ children }: Prosp) {
    return (
        <MoreButtonWrap>
            <MoreStyledButton sizeType="more" more={true}>
                {children}
            </MoreStyledButton>
        </MoreButtonWrap>
    );
}

const MoreButtonWrap = styled.div`
    padding: 0 0.9rem;
    margin-top: 1.2rem;
`;
const MoreStyledButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.line3};

    span {
        font-size: 0.65rem;
        font-weight: 600;
        color: ${Colors.black3};
        margin-top: 0.05rem;
    }
`;
