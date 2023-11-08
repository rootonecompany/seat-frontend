"use client";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    className?: string;
}

export default function CopyRight({ className }: Props) {
    return (
        <Copy className={className}>
            Copyright © TicketPang Corp. All rights reserved.
        </Copy>
    );
}

const Copy = styled.span`
    font-size: 0.6rem;
    font-weight: 400;
    color: ${Colors.gray3};
    text-align: center;
    margin-bottom: 2.1rem;
`;
