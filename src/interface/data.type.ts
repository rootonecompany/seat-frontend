import { StaticImageData } from "next/image";

// Ticket Rank Data Type
export interface TicketRankType {
    id: number;
    distributor: string;
    ranking: TicketRankingType[];
}
export interface TicketRankingType {
    rank: number;
    title: string;
    date: string;
    image: StaticImageData;
}
