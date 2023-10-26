"use client";

import { Colors } from "@/styles/Colors";
import Link from "next/link";
import styled from "styled-components";

export default function LoginFormOptions() {
    return (
        <Block>
            <AutoLoginBlock>
                <input type="checkbox" id="auto_login" />
                <label htmlFor="auto_login">자동 로그인</label>
            </AutoLoginBlock>
            <FindBlock>
                <Link href="/find/id">아이디 찾기</Link>
                <Link href="/find/password">비밀번호 찾기</Link>
            </FindBlock>
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0;
`;
const AutoLoginBlock = styled.div`
    display: flex;
    align-items: center;
    label {
        font-size: 0.7rem;
        font-weight: 500;
        color: ${Colors.black3};
    }
`;
const FindBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    a {
        position: relative;
        font-size: 0.7rem;
        font-weight: 500;
        color: ${Colors.black1};
        text-decoration: none;
    }
`;
