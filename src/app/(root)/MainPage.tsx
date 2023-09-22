"use client";

import useModal from "@/hooks/useModal";
import Link from "next/link";

export default function MainPage() {
    const { openModal } = useModal();
    return (
        <div>
            <Link href="/posts">Posts</Link>
            <button
                onClick={() => {
                    openModal({
                        component: () => <div>모달</div>,
                    });
                }}
            >
                팝업 오픈
            </button>
        </div>
    );
}
