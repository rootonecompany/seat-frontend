"use client";

import { useEffect, useState } from "react";
import Wrap from "@/components/template/Wrap";
import Title from "@/components/Title";
import TicketRankTabButton from "@/app/(root)/(main)/component/tabs/TicketRankTabButton";
import TicketRankTabContent from "./component/tabs/TicketRankTabContent";
import { useTab } from "@/hooks/useTab";
import { getTicketRank } from "@/apis/api/performance/performance";
import { TicketRankType } from "@/interface/data.type";

export default function TicketRank() {
    const [rankData, setRankData] = useState<TicketRankType[]>([]);
    const { tab, changeTab } = useTab(0);
    const tabContentData = rankData.find((_, index) => index === tab);
    useEffect(() => {
        getTicketRank().then((res) => {
            setRankData(res);
        });
    }, []);

    return (
        <Wrap>
            <Title
                title="예매처 티켓 랭킹 🏆"
                tag="h2"
                padding="1.5rem 0 0.6rem 0"
            />
            <div>
                <TicketRankTabButton
                    item={rankData}
                    tab={tab}
                    handleChangeTab={changeTab}
                />
                {tabContentData && (
                    <TicketRankTabContent item={tabContentData} />
                )}
            </div>
        </Wrap>
    );
}
