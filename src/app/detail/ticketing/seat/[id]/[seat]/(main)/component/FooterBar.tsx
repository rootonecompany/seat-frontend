"use client";

import Button from "@/components/Button";
import { Colors } from "@/styles/Colors";
import styled from "styled-components";

export default function FooterBar() {
    return (
        <>
            <FooterBarWrapper>
                <TicketingButton sizeType="main">예매하기</TicketingButton>
            </FooterBarWrapper>
            <FooterBarPadding />
        </>
    );
}

const FooterBarWrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4.4rem;
    padding: 0.9rem 0.95rem;
    background-color: ${Colors.white};
    z-index: 9999;
    box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.05);
`;
const FooterBarPadding = styled.div`
    padding-bottom: 4.4rem;
`;
const TicketingButton = styled(Button)`
    background-color: ${Colors.primary};
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors.white};
`;
