import { StaticImageData } from "next/image";

export interface ChildrenProps {
    children: React.ReactNode;
}

export interface Post {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

export interface PatchPost {
    title?: string;
    body?: string;
}

export interface Modal {
    key?: string;
    component?: () => React.ReactNode;
    close?: () => void;
}

// Form Type
export interface Form {
    [key: string]: string | number | undefined;
}

export interface UserFormRegister {
    username: string;
    email: string;
    password: string;
    checkbox: boolean;
}

// Certificate Type
interface RequestCertificate {
    name: string;
    phone: string;
    birth: string;
    gender_digit: string;
    carrier: string;
    is_mvno: boolean;
    company: string;
    merchant_uid: string;
    pg: string;
}

// Form Type
export interface LoginFormType {
    id: string;
    password: string;
}

export interface RegisterFormType extends LoginFormType {
    passwordCheck: string;
    username: string;
    userphone: string;
    authorization: boolean;
}

export interface FindFormType {
    id: string;
    username: string;
    userphone: string;
}

// Component Type
export interface RequiredAgreedsType {
    agreement_required_1: boolean;
    agreement_required_2: boolean;
    agreement_required_3: boolean;
}

export interface OptionalAgreedsType {
    agreement_optional_1: boolean;
    agreement_optional_2: boolean;
}

// Concert
export interface ConcertBannerType {
    id: number;
    title: string;
    image: StaticImageData;
    subHeading: string;
    date: string;
}

export interface MyTicketType {
    id: number;
    d_day: string;
    title: string;
    address: string;
    image: StaticImageData;
    date: string;
    time: string;
}

export interface PopularTicketType {
    id: number;
    title: string;
    date: string;
    genre: string;
    image: StaticImageData;
}

export interface TicketRankType {
    id: number;
    name: string;
    ranking: TicketRankingType[];
}
export interface TicketRankingType {
    rank: number;
    title: string;
    date: string;
    image: StaticImageData;
}

export interface GiftCardType {
    id: number;
    title: string;
    image: StaticImageData;
    price: string;
    discount?: string;
}

export interface ReviewType {
    id: number;
    name: string;
    title: string;
    content: string;
    image: StaticImageData;
    rating: number;
}
