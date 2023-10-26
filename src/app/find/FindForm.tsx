"use client";

import { useState } from "react";
import Button from "@/components/Button";
import LabelInput from "@/components/input/LabelInput";
import CopyRight from "@/components/CopyRight";
import { usePhoneNumberInput } from "@/hooks/usePhoneNumberInput";
import { Form } from "@/interface";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    mode: "id" | "password";
}

export default function FindForm({ mode }: Props) {
    const { phoneValue, formatPhoneNumber } = usePhoneNumberInput();
    const [inputValue, setInputValue] = useState<Form>({});

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "user_phone") {
            if (value.length > 13) return;
            formatPhoneNumber(e);
        }

        setInputValue({
            ...inputValue,
            [name]: value.replace(/-/g, ""),
        });
    };

    return (
        <Block>
            <FromBlock>
                {mode === "password" && (
                    <LabelInput
                        label="아이디"
                        placeholder="아이디를 입력해주세요."
                        name="user_id"
                        onChange={handleInputValue}
                    />
                )}
                <LabelInput
                    label="이름"
                    placeholder="이름을 입력해주세요."
                    name="user_name"
                    onChange={handleInputValue}
                />
                <LabelInput
                    label="휴대폰 번호"
                    placeholder="휴대폰 번호를 입력해주세요."
                    name="user_phone"
                    value={phoneValue}
                    onChange={handleInputValue}
                />
                <FindButton sizeType="main">
                    {
                        {
                            id: "아이디 찾기",
                            password: "비밀번호 찾기",
                        }[mode]
                    }
                </FindButton>
            </FromBlock>
            <CopyRight />
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    height: calc(100% - 4.8rem);
    display: flex;
    flex-direction: column;
`;
const FromBlock = styled.div`
    flex: 1;
    width: 100%;
    padding-top: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const FindButton = styled(Button)`
    background-color: ${Colors.primary};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};
`;
