"use client";

import { modalState } from "@/recoil/atom";
import { useRecoilValue } from "recoil";
import CustomModalForm from "./CustomModalForm";

export default function Modal() {
    const modals = useRecoilValue(modalState);
    return (
        <div id="modal">
            {modals.map((modal) => (
                <CustomModalForm
                    key={modal.key}
                    component={modal.component}
                    close={modal.close}
                />
            ))}
        </div>
    );
}
