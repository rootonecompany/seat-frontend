import { ModalProps } from "@/interface";
import { atom } from "recoil";

export const modalState = atom<ModalProps[]>({
    key: "modalState",
    default: [],
});
