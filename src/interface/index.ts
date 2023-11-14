import { StaticImageData } from "next/image";

declare global {
    interface Window {
        IMP?: Iamport;
    }
}
// Iamport Type
export interface Iamport {
    init: (accountID: string) => void;
    certification: (
        options: {
            pg: string;
            merchant_uid: string;
            m_redirect_url?: string;
            min_age?: string;
            name?: string;
            phone?: string;
            popup?: boolean;
        },
        callback?: (rsp: IamportResponse) => void
    ) => void;
}
export interface IamportResponse {
    error_code: null | string;
    error_msg: null | string;
    imp_uid: string;
    merchant_uid: string;
    pg_provider: string;
    pg_type: string;
    success: boolean;
}

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
    userId?: string;
    name: string;
    phone: string;
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
