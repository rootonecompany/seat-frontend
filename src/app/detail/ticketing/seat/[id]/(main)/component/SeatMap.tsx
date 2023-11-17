"use client";

import Image from "next/image";
import styled from "styled-components";

import Seat from "public/images/seat.gif";

export default function SeatMap() {
    return (
        <Block>
            <Image src={Seat} alt="좌석" fill priority />
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    width: 100%;
    height: 18.5rem;
`;
