"use client";

import Image from "next/image";

import { TicketRankType } from "@/interface/data.type";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    item: TicketRankType;
}

export default function TicketRankTabContent({ item }: Props) {
    return (
        <TabContentWrapper>
            <TabContent>
                {item.ranking.slice(0, 5).map((item) => (
                    <TabContentItem key={item.rank}>
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={44}
                            height={44}
                        />
                        <strong>{item.rank}</strong>
                        <div>
                            <h6>{item.title}</h6>
                            <span>{item.date}</span>
                        </div>
                    </TabContentItem>
                ))}
            </TabContent>
        </TabContentWrapper>
    );
}

const TabContentWrapper = styled.div`
    margin-top: 0.7rem;
    padding: 1rem;
    border-radius: 0.8rem;
    border: 1px solid ${Colors.line1};
    box-shadow: 0 0.1rem 0.4rem 0 rgba(0, 0, 0, 0.06);
    overflow: hidden;
`;
const TabContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const TabContentItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.65rem;

    & > img {
        min-width: 2.2rem;
        border-radius: 50%;
    }
    & > strong {
        font-size: 0.8rem;
        font-weight: 600;
        color: ${Colors.black4};
    }
    & > div {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        h6 {
            font-size: 0.7rem;
            font-weight: 600;
            line-height: 1.2;
            color: ${Colors.black3};
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        span {
            font-size: 0.6rem;
            font-weight: 400;
            color: ${Colors.black1};
        }
    }
`;
