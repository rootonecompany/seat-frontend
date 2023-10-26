"use client";

import Button from "@/components/Button";
import LabelInput from "@/components/input/LabelInput";
import { useFormInput } from "@/hooks/useFormInput";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

export default function LoginFormFields() {
    const { formValue, handleInputValue } = useFormInput();
    return (
        <FormStyled>
            <LabelInput
                type="text"
                placeholder="아이디를 입력해주세요."
                label="아이디"
                name="userId"
                id="user_id"
                onChange={handleInputValue}
            />
            <LabelInput
                type="password"
                placeholder="비밀번호를 입력해주세요."
                label="비밀번호"
                name="userPw"
                id="user_pw"
                onChange={handleInputValue}
            />
            <ButtonStyled
                sizeType="sub"
                disabled={!formValue.userId || !formValue.userPw}
            >
                로그인
            </ButtonStyled>
        </FormStyled>
    );
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const ButtonStyled = styled(Button)`
    background-color: ${Colors.primary};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};

    &:disabled {
        background-color: ${Colors.disabled3};
    }
`;
