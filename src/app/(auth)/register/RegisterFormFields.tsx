"use client";

import Button from "@/components/Button";
import RegsiterFormInput from "./RegisterFormInput";
import RegisterFormAuthorization from "./RegisterFormAuthorization";
import { useInput } from "@/hooks/useInput";
import { RegisterFormType } from "@/interface";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

export default function RegisterFormFields() {
    const { formValue, handleInputValue, phoneValue } =
        useInput<RegisterFormType>({
            id: "",
            password: "",
            passwordCheck: "",
            username: "",
            userphone: "",
            authorization: false,
        });

    return (
        <Block>
            <FormWrapper>
                <RegsiterFormInput
                    formValue={formValue}
                    handleInputValue={handleInputValue}
                />
                <RegisterFormAuthorization
                    handleInputValue={handleInputValue}
                    phoneValue={phoneValue}
                />
            </FormWrapper>
            <RegisterButton
                sizeType="main"
                disabled={
                    !formValue.id ||
                    !formValue.password ||
                    !formValue.passwordCheck ||
                    !formValue.username ||
                    !formValue.userphone ||
                    !formValue.authorization
                }
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
