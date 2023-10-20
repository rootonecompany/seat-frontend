"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";
import SnsButtons from "./SnsButtons";

interface Props {
    state: string;
}

export default function Sns({ state }: Props) {
    return (
        <Block>
            <TitleBox>
                <h6>티켓팡 간편 {state}</h6>
                <p>
                    지금 {state} 하신 후<br />
                    다양한 서비스를 경험해보세요.
                </p>
            </TitleBox>
            <SnsButtons mode={state} />
            <Copy>Copyright © TicketPang Corp. All rights reserved.</Copy>
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    height: calc(100% - 3.6rem);
    display: flex;
    flex-direction: column;
    padding: 3.2rem 0 2.1rem;
`;
const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.6rem;

    h6 {
        font-size: 1.2rem;
        font-weight: 700;
        color: ${Colors.black3};
    }

    p {
        font-size: 0.7rem;
        line-height: 1.4;
        color: ${Colors.black2};
        font-weight: 400;
    }
`;
const Copy = styled.span`
    font-size: 0.6rem;
    color: ${Colors.gray3};
    font-weight: 400;
    text-align: center;
`;
