"use client";

import { useState } from "react";
import Button from "@/components/Button";
import RegsiterFormInput from "./RegisterFormInput";
import RegisterFormAuthorization from "./RegisterFormAuthorization";
import { useInput } from "@/hooks/useInput";
import { RegisterType } from "@/interface/data.type";

import { Register } from "@/apis/api/auth/auth";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import { isEmpty, isPatternPassword, isPatternUserId } from "@/utils/pattern";
import { getAccessTokenCookie } from "@/apis/instance.api";

export default function RegisterFormFields() {
    const [isPassCheck, setIsPassCheck] = useState<string>("");
    const { formValue, setFormValue, handleInputValue, phoneValue } =
        useInput<RegisterType>({
            userId: "",
            password: "",
            name: "",
            phone: "",
            isPhoneVerified: false,
        });

    const isStrongUserId = isPatternUserId(formValue.userId);
    const isStrongPassword = isPatternPassword(formValue.password);
    const userIdEmpty = isEmpty(formValue.userId);
    const passwordEmpty = isEmpty(formValue.password);
    const nameEmpty = isEmpty(formValue.name);
    const phoneEmpty = isEmpty(formValue.phone);
    const isSamePassword = () => {
        return formValue.password === isPassCheck;
    };
    const calculateIsDisabled = () => {
        return (
            userIdEmpty ||
            passwordEmpty ||
            nameEmpty ||
            phoneEmpty ||
            !isStrongUserId ||
            !isStrongPassword ||
            !isSamePassword() ||
            !formValue.isPhoneVerified
        );
    };

    const handleRegister = async () => {
        const res = await Register(formValue);
        console.log(res);
    };

    console.log(getAccessTokenCookie());

    return (
        <Block>
            <FormWrapper>
                <RegsiterFormInput
                    formValue={formValue}
                    handleInputValue={handleInputValue}
                    isPassCheck={isPassCheck}
                    setIsPassCheck={setIsPassCheck}
                    isStrongUserId={isStrongUserId}
                    isSamePassword={isSamePassword}
                    isStrongPassword={isStrongPassword}
                />
                <RegisterFormAuthorization
                    handleInputValue={handleInputValue}
                    phoneValue={phoneValue}
                    formValue={formValue}
                    setFormValue={setFormValue}
                />
            </FormWrapper>
            <RegisterButton
                sizeType="main"
                disabled={calculateIsDisabled()}
                onClick={handleRegister}
            >
                가입하기
            </RegisterButton>
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 1.4rem;
    overflow-y: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const FormWrapper = styled.div`
    padding-top: 1.2rem;
    flex: 1;
`;
const RegisterButton = styled(Button)`
    background-color: ${Colors.primary};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};

    &:disabled {
        background-color: ${Colors.disabled3};
    }
`;
