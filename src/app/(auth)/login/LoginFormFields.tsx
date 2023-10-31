"use client";

import Link from "next/link";
import Button from "@/components/Button";
import LabelInput from "@/components/input/LabelInput";
import LoginFormOptions from "./LoginFormOptions";
import { LoginFormType } from "@/interface";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import { useInput } from "@/hooks/useInput";

export default function LoginFormFields() {
    const { formValue, handleInputValue } = useInput<LoginFormType>({
        id: "",
        password: "",
    });

    return (
        <div>
            <FormStyled>
                <LabelInput
                    type="text"
                    placeholder="아이디를 입력해주세요."
                    label="아이디"
                    name="id"
                    id="user_id"
                    onChange={handleInputValue}
                />
                <LabelInput
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    label="비밀번호"
                    name="password"
                    id="user_pw"
                    onChange={handleInputValue}
                />
            </FormStyled>
            <LoginFormOptions />
            <ButtonStyled
                sizeType="sub"
                disabled={formValue.id === "" || formValue.password === ""}
                onClick={() => alert("gd")}
            >
                로그인
            </ButtonStyled>
            <ButtonWrapper>
                <ButtonLink href="/register/terms">회원가입</ButtonLink>
            </ButtonWrapper>
        </div>
    );
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const ButtonWrapper = styled.div`
    margin-top: 1rem;
    padding-top: 2rem;
    border-top: 1px solid ${Colors.disabled2};
`;
const ButtonStyled = styled(Button)`
    background-color: ${Colors.primary};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};
    margin-top: 0.5rem;
    &:disabled {
        background-color: ${Colors.disabled3};
    }
`;
const ButtonLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.5rem;
    border-radius: 2.5rem;
    border: 1px solid ${Colors.primary};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.primary};
    text-decoration: none;
    -webkit-tab-hilight-color: transparent;
`;
