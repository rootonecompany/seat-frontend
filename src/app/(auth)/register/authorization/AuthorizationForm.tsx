"use client";

import { useState } from "react";
import { usePhoneNumberInput } from "@/hooks/usePhoneNumberInput";
import InputButton from "@/components/input/InputButton";
import LabelInput from "@/components/input/LabelInput";
import Button from "@/components/Button";
import { Form } from "@/interface";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

export default function AuthorizationForm() {
    const { phoneValue, formatPhoneNumber } = usePhoneNumberInput();
    const [input, setInput] = useState<Form>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "inputphone") {
            if (value.length > 13) return;
            formatPhoneNumber(e);
        }

        setInput({
            ...input,
            [name]: value.replace(/-/g, ""),
        });
    };

    return (
        <Block>
            <InputForm>
                <LabelInput
                    label="이름"
                    placeholder="이름을 입력해주세요."
                    id="inputname"
                    name="inputname"
                    onChange={handleInputChange}
                />
                <InputButton
                    label="휴대폰 번호"
                    inputProps={{
                        placeholder: "휴대폰 번호 (-없이 입력)",
                        id: "inputphone",
                        name: "inputphone",
                        value: phoneValue,
                        onChange: handleInputChange,
                    }}
                    buttonProps={{
                        disabled: phoneValue.length < 13,
                    }}
                />
            </InputForm>
            <ButtonsGroup>
                <CancelButton sizeType="main">취소</CancelButton>
                <SignButton sizeType="main">가입하기</SignButton>
            </ButtonsGroup>
        </Block>
    );
}
const Block = styled.div`
    width: 100%;
    padding: 1.2rem 0;
`;
const InputForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${Colors.line2};
`;
const ButtonsGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 1.4rem;
`;
const CancelButton = styled(Button)`
    width: 5.4rem;
    background-color: ${Colors.white};
    border: 1px solid ${Colors.line3};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.black2};
`;
const SignButton = styled(Button)`
    background-color: ${Colors.disabled3};
    border: 1px solid ${Colors.disabled3};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};
`;
