"use client";

import { useState } from "react";
import LabelInput from "@/components/input/LabelInput";
import { useInput } from "@/hooks/useInput";
import { isPatternPassword } from "@/utils/pattern";
import Button from "@/components/Button";
import { userPasswordUpdate } from "@/apis/api/auth/auth";
import useModal from "@/hooks/useModal";
import ButtonModal from "@/components/modal/modalcontents/ButtonModal";
import { useGo } from "@/hooks/useGo";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    userId?: string;
}

export default function NewPasswordForm({ userId }: Props) {
    const { handleLoginPage } = useGo();
    const { openModal } = useModal();
    const [passwordCheck, setPasswordCheck] = useState<string>("");
    const { formValue, handleInputValue } = useInput({
        userId: userId,
        password: "",
    });
    const isPasswordPattern = isPatternPassword(formValue.password);
    const buttonDisabled = () => {
        if (
            formValue.password !== "" &&
            isPasswordPattern &&
            passwordCheck !== "" &&
            passwordCheck === formValue.password
        ) {
            return false;
        }
        return true;
    };

    const handlePasswordUpdate = async () => {
        try {
            const res = await userPasswordUpdate(formValue);
            res.result && SuccessModal();
        } catch (error) {
            console.error(error);
        }
    };

    const SuccessModal = () => {
        const modal = openModal({
            component: () => {
                return (
                    <ButtonModal
                        title="비밀번호 변경이 완료되었습니다."
                        text="지금 바로 로그인해보세요!"
                        basicText="로그인 하기"
                        close={modal.close}
                        onPageMove={handleLoginPage}
                    />
                );
            },
        });
    };

    return (
        <FormBlock>
            <LabelInputWrapper>
                <LabelInput
                    label="새 비밀번호 입력"
                    placeholder="새로운 비밀번호를 입력해주세요."
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleInputValue}
                />
                {formValue.password !== "" ? (
                    !isPasswordPattern ? (
                        <span>
                            숫자, 영문, 특수문자 포함 10~16자리로 입력해주세요.
                        </span>
                    ) : (
                        <span className="available">
                            사용 가능한 비밀번호입니다.
                        </span>
                    )
                ) : null}
            </LabelInputWrapper>
            <LabelInputWrapper>
                <LabelInput
                    label="새 비밀번호 입력 확인"
                    placeholder="새로운 비밀번호를 입력해주세요."
                    type="password"
                    name="newPasswordCheck"
                    id="passwordCheck"
                    onChange={(e) => setPasswordCheck(e.target.value)}
                />
                {passwordCheck !== "" ? (
                    passwordCheck !== formValue.password ? (
                        <span>비밀번호가 일치하지 않습니다.</span>
                    ) : (
                        <span className="available">
                            비밀번호가 일치합니다.
                        </span>
                    )
                ) : null}
            </LabelInputWrapper>
            <NewPasswordChangeButton
                sizeType="main"
                disabled={buttonDisabled()}
                onClick={handlePasswordUpdate}
            >
                비밀번호 변경
            </NewPasswordChangeButton>
        </FormBlock>
    );
}

const FormBlock = styled.div`
    flex: 1;
    width: 100%;
    padding-top: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const LabelInputWrapper = styled.div`
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
const NewPasswordChangeButton = styled(Button)`
    background-color: ${Colors.primary};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};

    &:disabled {
        background-color: ${Colors.disabled3};
    }
`;
