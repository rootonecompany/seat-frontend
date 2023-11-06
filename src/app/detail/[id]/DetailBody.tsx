"use client";

import Wrap from "@/components/template/Wrap";
import TabBody from "./tabs/TabBody";
import TabHeaders from "./tabs/TabHeaders";
import { useTab } from "@/hooks/useTab";

import styled from "styled-components";

export default function DetailBody() {
    const { tab, changeTab } = useTab(0);

    return (
        <Wrap height="normal" as="section">
            <Block>
                <TabHeaders handleChangeTab={changeTab} tab={tab} />
                <TabBody tab={tab} />
            </Block>
        </Wrap>
    );
}

const Block = styled.div`
    padding: 1rem 0 1.7rem;
`;
