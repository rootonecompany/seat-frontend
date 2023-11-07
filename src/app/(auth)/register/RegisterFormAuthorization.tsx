"use client";

import LabelInput from "@/components/input/LabelInput";
import { Props as FormType } from "./RegisterFormInput";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props extends Omit<FormType, "formValue"> {
    phoneValue: string;
}

export default function RegisterFormAuthorization({
    phoneValue,
    handleInputValue,
}: Props) {
    return (
        <AuthorizationBlock>
            <LabelInput
                label="이름"
                placeholder="이름을 입력해주세요."
                id="username"
                name="name"
                onChange={handleInputValue}
            />
            <PhoneAuthorization
                label="휴대폰 번호"
                placeholder="휴대폰 번호를 입력해주세요."
                id="userphone"
                name="phone"
                value={phoneValue}
                onChange={handleInputValue}
            >
                <button>본인인증 받기</button>
            </PhoneAuthorization>
            <span>
                만 14세 미만 회원은 법정대리인(부모님) 동의를 받은
                <br />
                경우만 회원가입이 가능합니다.
            </span>
        </AuthorizationBlock>
    );
}

const AuthorizationBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 2.1rem;

    & > span {
        font-size: 0.7rem;
        font-weight: 300;
        color: ${Colors.black1};
        line-height: 1.3;
    }
`;
const PhoneAuthorization = styled(LabelInput)`
    & > div > input {
        padding-right: 5.6rem;
    }
    & > div > button {
        position: absolute;
        right: 0.8rem;
        top: 50%;
        transform: translateY(-50%);
        width: 4rem;
        height: 1.4rem;
        border-radius: 0.2rem;
        background-color: ${Colors.white};
        border: 1px solid ${Colors.line3};
        font-size: 0.6rem;
        font-weight: 400;
        color: ${Colors.black3};
    }
`;
