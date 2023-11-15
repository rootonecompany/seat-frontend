"use client";

import { useState } from "react";
import FullHeightWrap from "@/components/template/FullHeightWrap";
import Button from "@/components/Button";
import LabelInput from "@/components/input/LabelInput";
import CopyRight from "@/components/CopyRight";
import useModal from "@/hooks/useModal";
import ButtonModal from "@/components/modal/modalcontents/ButtonModal";
import { useInput } from "@/hooks/useInput";
import { verification } from "@/utils/getVerification";
import { getFindId, getFindPassword } from "@/apis/api/auth/auth";
import { FindFormType } from "@/interface";
import NewPasswordForm from "./NewPasswordForm";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    mode: "id" | "password";
}

export default function FindForm({ mode }: Props) {
    const [isPasswordFind, setIsPasswordFind] = useState<boolean>(false);
    const { openModal } = useModal();
    const { formValue, handleInputValue, phoneValue } = useInput<FindFormType>(
        mode === "id"
            ? {
                  name: "",
                  phone: "",
              }
            : {
                  userId: "",
                  name: "",
                  phone: "",
              }
    );

    const buttonOptions = {
        id: {
            disabled: !formValue.name || !phoneValue,
            text: "아이디 찾기",
        },
        password: {
            disabled: !formValue.userId || !formValue.name || !phoneValue,
            text: "비밀번호 찾기",
        },
    }[mode];

    const handleFindIdButton = () => {
        verification({
            name: formValue.name,
            phone: phoneValue,
            successCallback: async () => {
                const res = await getFindId(formValue);
                res.userId && FindModal(res.userId);
            },
            failCallback() {
                console.log("fail");
            },
        });
    };

    const handleFindPasswrordButton = () => {
        verification({
            name: formValue.name,
            phone: phoneValue,
            successCallback: async () => {
                const res = await getFindPassword(formValue);
                setIsPasswordFind(res.result);
            },
            failCallback() {
                console.log("fail");
            },
        });
    };

    const FindModal = (id: string) => {
        const modal = openModal({
            component: () => {
                return (
                    <ButtonModal
                        close={modal.close}
                        title="회원 아이디"
                        basicText="확인"
                        text={`아이디 : ${id}`}
                    />
                );
            },
        });
    };

    return (
        <FullHeightWrap>
            {isPasswordFind ? (
                <NewPasswordForm userId={formValue.userId} />
            ) : (
                <FromBlock>
                    {mode === "password" && (
                        <LabelInput
                            label="아이디"
                            placeholder="아이디를 입력해주세요."
                            name="userId"
                            id="id"
                            onChange={handleInputValue}
                        />
                    )}
                    <LabelInput
                        label="이름"
                        placeholder="이름을 입력해주세요."
                        name="name"
                        id="username"
                        onChange={handleInputValue}
                    />
                    <LabelInput
                        label="휴대폰 번호"
                        placeholder="휴대폰 번호를 입력해주세요."
                        name="phone"
                        id="userphone"
                        value={phoneValue}
                        onChange={handleInputValue}
                    />
                    <FindButton
                        sizeType="main"
                        disabled={buttonOptions.disabled}
                        onClick={
                            mode === "id"
                                ? handleFindIdButton
                                : handleFindPasswrordButton
                        }
                    >
                        {buttonOptions.text}
                    </FindButton>
                </FromBlock>
            )}

            <CopyRight />
        </FullHeightWrap>
    );
}

const FromBlock = styled.div`
    flex: 1;
    width: 100%;
    padding-top: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const FindButton = styled(Button)`
    background-color: ${Colors.primary};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};

    &:disabled {
        background-color: ${Colors.disabled3};
    }
`;
