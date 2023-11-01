"use client";
import MyTicketList from "@/components/list/MyTicketList";
import Wrap from "@/components/template/Wrap";
import styled from "styled-components";

export default function MyTicket() {
    return (
        <Block>
            <MyTicketList />
        </Block>
    );
}

const Block = styled(Wrap)`
    margin-top: 1.75rem;
`;
