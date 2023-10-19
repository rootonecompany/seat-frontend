"use client";

import Image from "next/image";
import styled from "styled-components";

import Search from "/public/images/icons/icon_search.png";
import Menu from "/public/images/icons/icon_menu.png";
import { useSetRecoilState } from "recoil";
import { menuState } from "@/recoil/atom";

export default function HeaderButtonGroup({
    className,
}: {
    className?: string;
}) {
    const isMenuOpen = useSetRecoilState(menuState);
    const openMenu = () => {
        isMenuOpen(true);
    };

    return (
        <>
            <ButtonGroup className={className}>
                <button>
                    <Image src={Search} width={34} height={34} alt="검색" />
                </button>
                <button onClick={openMenu}>
                    <Image src={Menu} width={34} height={34} alt="메뉴" />
                </button>
            </ButtonGroup>
        </>
    );
}

const ButtonGroup = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: inherit;
    display: flex;
    align-items: center;
    padding-right: 0.4rem;

    button {
        height: inherit;
        padding: 0.25rem;
    }
`;
