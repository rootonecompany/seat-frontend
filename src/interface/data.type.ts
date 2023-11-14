import { StaticImageData } from "next/image";

// Ticket Rank Data Type
export interface TicketRankType {
    distributor: string;
    ranking: TicketRankingType[];
}
export interface TicketRankingType {
    rank: number;
    title: string;
    date: string;
    image: StaticImageData;
}

// register type
export interface RegisterType {
    userId: string;
    password: string;
    name: string;
    phone: string;
    isPhoneVerified: boolean;
}
export interface RegisterReturnType {
    id: number;
    role: string;
    userId: string;
    name: string;
    phone: string;
    phone_e164: string;
    isPhoneVerified: boolean;
    createdAt: string;
    updatedAt: string;
    accessToken: string;
    expireIn: number;
}
export interface UserIdDuplicateCheckReturnType {
    result: boolean;
}
