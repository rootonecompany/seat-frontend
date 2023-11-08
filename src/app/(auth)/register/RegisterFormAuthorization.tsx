"use client";

import LabelInput from "@/components/input/LabelInput";
import { Props as FormType } from "./RegisterFormInput";
import { RegisterType } from "@/interface";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props extends Omit<FormType, "formValue"> {
    phoneValue: string;
    formValue: RegisterType;
    setFormValue: React.Dispatch<React.SetStateAction<RegisterType>>;
}

export default function RegisterFormAuthorization({
    phoneValue,
    handleInputValue,
    formValue,
    setFormValue,
}: Props) {
    const handleVerification = () => {
        if (formValue.name === "" || formValue.phone === "") return;
        if (!window.IMP) return;
        const IMP = window.IMP;
        IMP.init("imp54817857");
        IMP.certification(
            {
                pg: "danal",
                merchant_uid: "merchant_" + new Date().getTime(),
                name: formValue.name,
                phone: formValue.phone,
                popup: false,
            },
            (rsp) => {
                if (rsp.success) {
                    console.log(rsp);
                    setFormValue({
                        ...formValue,
                        isPhoneVerified: true,
                    });
                } else {
                    console.log(rsp);
                }
            }
        );
    };

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
                <button
                    onClick={handleVerification}
                    className={!formValue.isPhoneVerified ? "" : "success"}
                    disabled={formValue.isPhoneVerified}
                >
                    {!formValue.isPhoneVerified
                        ? "본인인증 받기"
                        : "본인인증 완료"}
                </button>
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

        &.success {
            background-color: ${Colors.white};
            border: 1px solid ${Colors.white};
            color: ${Colors.primary};
        }
    }
`;
