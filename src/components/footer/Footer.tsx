"use client";

import { Colors } from "@/styles/Colors";
import styled from "styled-components";

export default function Footer() {
    return (
        <Block>
            <h6>(주)티켓팡</h6>
            <FooterContent>
                <span>
                    대표이사 : 이근일 I 서울 강남구 391 우림블루나인 2013호
                </span>
                <span>사업자등록번호 : 932-23-00912</span>

                <span className="copy">© TICKETBAY. ALL RIGHTS RESERVED.</span>
            </FooterContent>
        </Block>
    );
}

const Block = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 2.25rem 0.9rem 2.6rem;
    background-color: ${Colors.gray1};

    h6 {
        font-size: 0.65rem;
        font-weight: 600;
        color: ${Colors.black1};
    }
`;
const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 0.9rem;
    span {
        font-size: 0.6rem;
        font-weight: 400;
        color: ${Colors.black1};
    }
    .copy {
        margin-top: 1rem;
    }
`;
