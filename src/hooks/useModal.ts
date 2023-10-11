import { Modal } from "@/interface";
import { modalState } from "@/recoil/atom";
import { useRecoilState } from "recoil";

export default function useModal() {
    const [modals, setModals] = useRecoilState(modalState);
    const openModal = (modal: Modal) => {
        const key = Math.random().toString(36).substring(2);
        const nextProps = {
            key,
            component: modal.component,
            close: () => closeModal(key),
        };
        setModals([...modals, nextProps]);
    };

    const closeModal = (key: string) => {
        setModals(modals.filter((modal) => modal!.key !== key));
    };

    return { openModal };
}
