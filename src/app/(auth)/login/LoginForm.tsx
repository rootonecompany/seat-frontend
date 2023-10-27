"use client";

import FullHeightWrap from "@/components/template/FullHeightWrap";
import CopyRight from "@/components/CopyRight";
import LoginFormFields from "./LoginFormFields";
import styled from "styled-components";

export default function LoginForm() {
    return (
        <FullHeightWrap>
            <FormBlock>
                <LoginFormFields />
            </FormBlock>
            <CopyRight />
        </FullHeightWrap>
    );
}

const FormBlock = styled.div`
    flex: 1;
    padding-top: 1.2rem;
`;
