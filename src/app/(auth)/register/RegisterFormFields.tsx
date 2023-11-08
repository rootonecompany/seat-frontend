"use client";

import { useState } from "react";
import Button from "@/components/Button";
import RegsiterFormInput from "./RegisterFormInput";
import RegisterFormAuthorization from "./RegisterFormAuthorization";
import { useInput } from "@/hooks/useInput";
import { RegisterType } from "@/interface";
import { Register } from "@/apis/api/auth/auth";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

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

    const isStrongUserId = () => {
        const userIdPattern = /^[A-Za-z0-9]{6,}$/;
        return userIdPattern.test(formValue.userId);
    };
    const isStrongPassword = () => {
        const passwordPattern =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
        return passwordPattern.test(formValue.password);
    };
    const isSamePassword = () => {
        return formValue.password === isPassCheck;
    };
    const calculateIsDisabled = () => {
        return (
            formValue.userId === "" ||
            formValue.password === "" ||
            formValue.name === "" ||
            formValue.phone === "" ||
            !isStrongUserId() ||
            !isStrongPassword() ||
            !isSamePassword() ||
            !formValue.isPhoneVerified
        );
    };

    const handleRegister = async () => {
        const res = await Register(formValue);
        console.log(res);
    };

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
                onClick={() => Register(formValue)}
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
