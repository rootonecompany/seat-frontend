export interface ChildrenProps {
    children: React.ReactNode;
}

export interface Post {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

export interface ModalProps {
    key?: string;
    component?: () => JSX.Element;
    close?: () => void;
}
