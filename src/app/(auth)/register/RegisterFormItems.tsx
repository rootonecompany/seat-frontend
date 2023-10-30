"use client";

import Button from "@/components/Button";
import LabelInput from "@/components/input/LabelInput";
import { usePhoneNumberInput } from "@/hooks/usePhoneNumberInput";
import { useFormInput } from "@/hooks/useFormInput";
import { RegisterFormType } from "@/interface";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

export default function RegisterFormItems() {
    const { formValue, handleInputValue } = useFormInput<RegisterFormType>({
        id: "",
        password: "",
        passwordCheck: "",
        username: "",
        userphone: "",
        authorization: false,
    });
    const { phoneValue, formatPhoneNumber } = usePhoneNumberInput();

    const isStrongPassword = () => {
        const passwordPattern =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
        return passwordPattern.test(formValue.password);
    };

    const isSamePassword = () => {
        return formValue.password === formValue.passwordCheck;
    };

    return (
        <Block>
            <FormWrapper>
                <InputWrapper>
                    <LabelInput
                        label="아이디"
                        placeholder="아이디를 입력해주세요."
                        id="id"
                        name="id"
                        onChange={handleInputValue}
                    />
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
                                    숫자, 영문, 특수문자 포함 10~16자리로
                                    입력해주세요.
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
                <AuthorizationBlock>
                    <LabelInput
                        label="이름"
                        placeholder="이름을 입력해주세요."
                        id="username"
                        name="username"
                        onChange={handleInputValue}
                    />
                    <PhoneAuthorizationInput
                        label="휴대폰 번호"
                        placeholder="휴대폰 번호를 입력해주세요."
                        id="userphone"
                        name="userphone"
                        value={phoneValue}
                        onChange={(e) => {
                            formatPhoneNumber(e);
                            handleInputValue(e);
                        }}
                    >
                        <button>인증번호 받기</button>
                    </PhoneAuthorizationInput>
                    <span>
                        만 14세 미만 회원은 법정대리인(부모님) 동의를 받은
                        <br />
                        경우만 회원가입이 가능합니다.
                    </span>
                </AuthorizationBlock>
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
const PhoneAuthorizationInput = styled(LabelInput)`
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
const RegisterButton = styled(Button)`
    background-color: ${Colors.primary};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};

    &:disabled {
        background-color: ${Colors.disabled3};
    }
`;
