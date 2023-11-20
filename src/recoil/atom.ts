import { atom } from "recoil";
import { Modal } from "@/interface";

export const modalState = atom<Modal[]>({
    key: "modalState",
    default: [],
});

export const menuState = atom<boolean>({
    key: "menuState",
    default: false,
});

export const headerScrollState = atom<boolean>({
    key: "headerScrollState",
    default: false,
});

export const selectedSeatState = atom<string>({
    key: "selectedSeatState",
    default: "",
});

const cookieEffect = (accessToken: string) => {};
