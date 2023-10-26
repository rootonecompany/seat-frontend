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
    [key: string]: string | number;
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
