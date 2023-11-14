"use client";

import LabelInput from "@/components/input/LabelInput";
import { Props as FormType } from "./RegisterFormInput";
import { verification } from "@/utils/getVerification";
import { RegisterType } from "@/interface/data.type";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import useModal from "@/hooks/useModal";
import FailModal from "@/components/modal/modalcontents/FailModal";

interface Props extends FormType {
    phoneValue: string;
    setFormValue: React.Dispatch<React.SetStateAction<RegisterType>>;
}

export default function RegisterFormAuthorization({
    phoneValue,
    handleInputValue,
    formValue,
    setFormValue,
}: Props) {
    const { openModal } = useModal();
    const handleVerification = () => {
        if (formValue.name === "" || formValue.phone === "")
            return handleFailModal();
        verification({
            name: formValue.name,
            phone: formValue.phone,
            successCallback: () => {
                console.log("본인인증에 성공했습니다.");
                setFormValue((prev) => ({ ...prev, isPhoneVerified: true }));
            },
            failCallback: () => {
                console.log("본인인증에 실패했습니다.");
            },
        });
    };

    const handleFailModal = () => {
        const modal = openModal({
            component() {
                return (
                    <FailModal
                        text="이름과 휴대폰번호를 모두 입력해주세요."
                        close={modal.close}
                    />
                );
            },
        });
    };

    return (
        <AuthorizationBlock>
            <LabelInput
                label="이름"
                placeholder="이름을 입력해주세요."
                id="username"
                name="name"
                onChange={handleInputValue}
                disabled={formValue.isPhoneVerified}
            />
            <PhoneAuthorization
                label="휴대폰 번호"
                placeholder="휴대폰 번호를 입력해주세요."
                id="userphone"
                name="phone"
                value={phoneValue}
                onChange={handleInputValue}
                disabled={formValue.isPhoneVerified}
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
            background-color: transparent;
            border: none;
            color: ${Colors.primary};
        }
    }
`;
