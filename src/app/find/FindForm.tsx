"use client";

import FullHeightWrap from "@/components/template/FullHeightWrap";
import Button from "@/components/Button";
import LabelInput from "@/components/input/LabelInput";
import CopyRight from "@/components/CopyRight";
import { useFormInput } from "@/hooks/useFormInput";
import { usePhoneNumberInput } from "@/hooks/usePhoneNumberInput";
import { FindFormType } from "@/interface";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    mode: "id" | "password";
}

export default function FindForm({ mode }: Props) {
    const { formValue, handleInputValue } = useFormInput<FindFormType>({
        id: "",
        username: "",
        userphone: "",
    });
    const { phoneValue, formatPhoneNumber } = usePhoneNumberInput();

    return (
        <FullHeightWrap>
            <FromBlock>
                {mode === "password" && (
                    <LabelInput
                        label="아이디"
                        placeholder="아이디를 입력해주세요."
                        name="id"
                        id="id"
                        onChange={handleInputValue}
                    />
                )}
                <LabelInput
                    label="이름"
                    placeholder="이름을 입력해주세요."
                    name="username"
                    id="username"
                    onChange={handleInputValue}
                />
                <LabelInput
                    label="휴대폰 번호"
                    placeholder="휴대폰 번호를 입력해주세요."
                    name="userphone"
                    id="userphone"
                    value={phoneValue}
                    onChange={(e) => {
                        handleInputValue(e);
                        formatPhoneNumber(e);
                    }}
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
        </FullHeightWrap>
    );
}

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
