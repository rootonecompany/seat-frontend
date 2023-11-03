"use client";

import Wrap from "@/components/template/Wrap";
import Title from "@/components/Title";
import TicketRankTabButton from "@/app/(root)/(main)/component/tabs/TicketRankTabButton";
import TicketRankTabContent from "./component/tabs/TicketRankTabContent";

import { useTab } from "@/hooks/useTab";

import { TicketRankType } from "@/interface";

const TabData: TicketRankType[] = [
    {
        id: 1,
        name: "인터파크",
        ranking: [
            {
                rank: 1,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample,
            },
            {
                rank: 2,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample2,
            },
            {
                rank: 3,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample,
            },
            {
                rank: 4,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample2,
            },
            {
                rank: 5,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample,
            },
        ],
    },
    {
        id: 2,
        name: "YES24",
        ranking: [
            {
                rank: 1,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample2,
            },
            {
                rank: 2,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample,
            },
            {
                rank: 3,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample2,
            },
            {
                rank: 4,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample,
            },
            {
                rank: 5,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample2,
            },
        ],
    },
    {
        id: 3,
        name: "티켓링크",
        ranking: [
            {
                rank: 1,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample,
            },
            {
                rank: 2,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample2,
            },
            {
                rank: 3,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample,
            },
            {
                rank: 4,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample2,
            },
            {
                rank: 5,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample,
            },
        ],
    },
    {
        id: 4,
        name: "멜론티켓",
        ranking: [
            {
                rank: 1,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample2,
            },
            {
                rank: 2,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample,
            },
            {
                rank: 3,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample2,
            },
            {
                rank: 4,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample,
            },
            {
                rank: 5,
                title: "2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…2023 영탁 단독 콘서트 Tak 2023 영탁 단독 콘서트 Tak S…",
                date: "2023.10.27 ~ 2024.01.02",
                image: Sample2,
            },
        ],
    },
];

import Sample from "public/images/sample/sample_concert.png";
import Sample2 from "public/images/sample/sample_concert2.png";

export default function TicketRank() {
    const { tab, changeTab } = useTab();
    const tabContentData = TabData.find((item) => item.id === tab);

    return (
        <Wrap>
            <Title
                title="예매처 티켓 랭킹 🏆"
                tag="h2"
                padding="1.5rem 0 0.6rem 0"
            />
            <div>
                <TicketRankTabButton
                    item={TabData}
                    tab={tab}
                    onClickTab={changeTab}
                />
                {tabContentData && (
                    <TicketRankTabContent item={tabContentData} />
                )}
            </div>
        </Wrap>
    );
}
