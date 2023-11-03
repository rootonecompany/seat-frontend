"use client";

import MyTicketListItem from "./MyTicketListItem";
import MyTicketNone from "./MyTicketNone";
import { MyTicketType } from "@/interface";

import styled from "styled-components";
import { Colors } from "@/styles/Colors";

import Sample from "public/images/sample/sample_concert2.png";

const data: MyTicketType[] = [
    {
        id: 1,
        d_day: "D-23",
        mainTitle:
            "2023 영탁 단독 콘서트 2023 영탁 단독 콘서트 2023 영탁 단독 콘서트",
        address: "서울잠실종합운동장",
        date: "10.27 (화)",
        time: "오후 : 6:00",
        image: Sample,
    },
];

export default function MyTicketList() {
    return (
        <Block>
            <h4>내 보유티켓</h4>
            {data && data.length > 0 ? (
                data.map((item) => (
                    <MyTicketListItem key={item.id} item={item} />
                ))
            ) : (
                <MyTicketNone />
            )}
        </Block>
    );
}

const Block = styled.div`
    margin-top: 1.75rem;
    h4 {
        font-size: 0.9rem;
        font-weight: 700;
        color: ${Colors.black3};
    }
`;
