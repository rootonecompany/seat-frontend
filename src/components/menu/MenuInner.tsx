"use client";

import styled from "styled-components";
import MenuUser from "./MenuUser";
import MenuLink from "./MenuLink";
import CopyRight from "../CopyRight";
import { useState } from "react";

export default function MenuInner() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <MenuStyledInner>
            <Block>
                <MenuUser isLoggedIn={isLoggedIn} />
                <MenuLink isLoggedIn={isLoggedIn} />
            </Block>
            <Copy />
        </MenuStyledInner>
    );
}

const MenuStyledInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const Block = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;
const Copy = styled(CopyRight)`
    margin-bottom: 0;
    font-size: 0.55rem;
`;
