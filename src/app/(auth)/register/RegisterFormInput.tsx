"use client";

import LabelInput from "@/components/input/LabelInput";
import { RegisterFormType } from "@/interface";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

export interface Props {
    formValue: RegisterFormType;
    handleInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RegsiterFormInput({
    formValue,
    handleInputValue,
}: Props) {
    const isStrongPassword = () => {
        const passwordPattern =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
        return passwordPattern.test(formValue.password);
    };
    const isSamePassword = () => {
        return formValue.password === formValue.passwordCheck;
    };

    return (
        <InputWrapper>
            <LabelInputDubleCheck
                label="아이디"
                placeholder="아이디를 입력해주세요."
                id="id"
                name="id"
                onChange={handleInputValue}
            >
                <button>중복확인</button>
            </LabelInputDubleCheck>
            <InputItemWrap>
                <LabelInput
                    label="비밀번호"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    id="password"
                    name="password"
                    onChange={handleInputValue}
                />
                {formValue.password !== "" ? (
                    !isStrongPassword() ? (
                        <span>
                            숫자, 영문, 특수문자 포함 10~16자리로 입력해주세요.
                        </span>
                    ) : (
                        <span className="available">
                            사용 가능한 비밀번호입니다.
                        </span>
                    )
                ) : null}
            </InputItemWrap>
            <InputItemWrap>
                <LabelInput
                    label="비밀번호 확인"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    id="passwordCheck"
                    name="passwordCheck"
                    onChange={handleInputValue}
                />
                {formValue.passwordCheck !== "" ? (
                    !isSamePassword() ? (
                        <span>비밀번호가 일치하지 않습니다.</span>
                    ) : (
                        <span className="available">
                            비밀번호가 일치합니다.
                        </span>
                    )
                ) : null}
            </InputItemWrap>
        </InputWrapper>
    );
}

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${Colors.line2};
`;
const InputItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    & > span {
        font-size: 0.6rem;
        font-weight: 400;
        color: ${Colors.error};
    }
    & > .available {
        font-size: 0.6rem;
        font-weight: 400;
        color: ${Colors.primary};
    }
`;
const LabelInputDubleCheck = styled(LabelInput)`
    & > div > input {
        padding-right: 4.7rem;
    }
    & > div > button {
        position: absolute;
        right: 0.8rem;
        top: 50%;
        transform: translateY(-50%);
        width: 3.1rem;
        height: 1.4rem;
        border-radius: 0.2rem;
        background-color: ${Colors.white};
        border: 1px solid ${Colors.line3};
        font-size: 0.6rem;
        font-weight: 400;
        color: ${Colors.black3};
    }
`;
