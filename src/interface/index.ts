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
    component?: () => JSX.Element;
    close?: () => void;
}

// Form Type
export interface Form {
    [key: string]: string | number | boolean;
}

export interface UserFormRegister {
    username: string;
    email: string;
    password: string;
    checkbox: boolean;
}
