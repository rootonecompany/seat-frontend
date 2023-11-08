"use client";

import Image from "next/image";
import { useGo } from "@/hooks/useGo";
import { useSetRecoilState } from "recoil";
import { menuState } from "@/recoil/atom";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import Profile from "public/images/icons/icon_profile.png";

interface Props {
    isLoggedIn?: boolean;
}

export default function MenuUser({ isLoggedIn = false }: Props) {
    const { handleLoginPage, handleRegisterPage } = useGo();
    const isMenuOpen = useSetRecoilState(menuState);

    return (
        <Block>
            <UserWrapper>
                <Image src={Profile} alt="profile" width={54} height={54} />
                {!isLoggedIn ? (
                    <div>
                        <h6>로그인을 해주세요</h6>
                        <span>아직 회원이 아니신가요?</span>
                    </div>
                ) : (
                    <div>
                        <h6>...님</h6>
                        <span>안녕하세요.</span>
                    </div>
                )}
            </UserWrapper>
            {!isLoggedIn && (
                <ButtonWrapper>
                    <button
                        className="login"
                        onClick={() => {
                            handleLoginPage();
                            isMenuOpen(false);
                        }}
                    >
                        로그인
                    </button>
                    <button
                        className="register"
                        onClick={() => {
                            handleRegisterPage();
                            isMenuOpen(false);
                        }}
                    >
                        회원가입
                    </button>
                </ButtonWrapper>
            )}
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 1.35rem;
    border-bottom: 1px solid ${Colors.line2};
`;
const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        h6 {
            font-size: 0.7rem;
            font-weight: 600;
            color: ${Colors.black3};
            line-height: 1.2;
        }
        span {
            font-size: 0.7rem;
            font-weight: 400;
            color: ${Colors.black2};
        }
    }
`;
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-top: 1.2rem;
    button {
        width: 100%;
        height: 2.2rem;
        border-radius: 1.1rem;
        font-size: 0.75rem;
        font-weight: 600;

        &.login {
            border: 1px solid ${Colors.line3};
            color: ${Colors.black3};
        }
        &.register {
            background-color: ${Colors.primary};
            color: ${Colors.white};
        }
    }
`;
