"use client";

import LoginFormFields from "./LoginFormFields";
import FormOptions from "./FormOptions";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

export default function LoginForm() {
    return (
        <Block>
            <FormBlock>
                <LoginFormFields />
                <FormOptions />
            </FormBlock>
            <Copy>Copyright © TicketPang Corp. All rights reserved.</Copy>
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    height: calc(100% - 4.8rem);
    padding-top: 1.2rem;
    display: flex;
    flex-direction: column;
`;
const FormBlock = styled.div`
    flex: 1;
`;
const Copy = styled.span`
    font-size: 0.6rem;
    font-weight: 400;
    color: ${Colors.gray3};
    text-align: center;
    margin-bottom: 0.5rem;
`;
