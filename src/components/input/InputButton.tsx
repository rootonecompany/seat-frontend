"use client";

import Input from "./Input";
import { Colors } from "@/styles/Colors";
import styled from "styled-components";
import Button from "../Button";

interface Props {
    label: string;
    inputProps: React.InputHTMLAttributes<HTMLInputElement>;
    buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

declare const window: typeof globalThis & {
    IMP: any;
};

export default function InputButton({ label, inputProps, buttonProps }: Props) {
    const handleCertification = () => {
        if (!window.IMP) return;
        const { IMP } = window;
        IMP.init("imp01165256");
        IMP.certification(
            {
                pg: "danal.A010002002",
                merchant_uid: "ORD20180131-0000011",
                popup: false,
            },
            (rsp: any) => {
                console.log(rsp);
            }
        );
    };
    return (
        <Block>
            <StyleLabel htmlFor={inputProps.id}>{label}</StyleLabel>
            <InputButtonWrapper>
                <Input {...inputProps} />
                <StyledButton
                    sizeType="sub"
                    {...buttonProps}
                    onClick={handleCertification}
                >
                    본인인증
                </StyledButton>
            </InputButtonWrapper>
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
const InputButtonWrapper = styled.div`
    display: flex;
    align-content: center;
    gap: 0.4rem;
`;
const StyledButton = styled(Button)`
    width: 5.3rem;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.line3};
    font-size: 0.7rem;
    font-weight: 400;
    color: ${Colors.primary};

    &:disabled {
        color: ${Colors.placeholder};
        background-color: ${Colors.gray2};
        border: 1px solid ${Colors.line3};
    }
`;
