"use client";

import Wrap from "@/components/template/Wrap";
import TicketingSelectDate from "./component/TicketingSelectDate";
import TicketingSeat from "./component/TicketingSeat";
import styled from "styled-components";

export default function TicketingBody() {
    return (
        <Wrap height="normal" as="section">
            <Block>
                <TicketingSelectDate />
                <TicketingSeat />
            </Block>
        </Wrap>
    );
}

const Block = styled.div`
    padding: 1.8rem 0;
`;
