import { Modal } from "@/interface";
import { atom } from "recoil";

export const modalState = atom<Modal[]>({
    key: "modalState",
    default: [],
});

export const menuState = atom<boolean>({
    key: "menuState",
    default: false,
});
