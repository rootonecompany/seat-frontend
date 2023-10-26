"use client";

import CopyRight from "@/components/CopyRight";
import LoginFormFields from "./LoginFormFields";
import LoginFormOptions from "./LoginFormOptions";
import styled from "styled-components";

export default function LoginForm() {
    return (
        <Block>
            <FormBlock>
                <LoginFormFields />
                <LoginFormOptions />
            </FormBlock>
            <CopyRight />
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
