"use client";

import Image from "next/image";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { headerScrollState, menuState } from "@/recoil/atom";

import Search from "/public/images/icons/icon_search.png";
import Menu from "/public/images/icons/icon_menu.png";
import SearchWhite from "/public/images/icons/icon_search_white.png";
import MenuWhite from "/public/images/icons/icon_menu_white.png";

interface Props {
    className?: string;
    overlap?: boolean;
}

export default function HeaderButtonGroup({
    className,
    overlap = false,
}: Props) {
    const isMenuOpen = useSetRecoilState(menuState);
    const openMenu = () => {
        isMenuOpen(true);
    };
    const isScroll = useRecoilValue(headerScrollState);
    return (
        <>
            <ButtonGroup className={className}>
                <button>
                    {overlap ? (
                        <Image
                            src={isScroll ? Search : SearchWhite}
                            width={34}
                            height={34}
                            alt="검색"
                        />
                    ) : (
                        <Image src={Search} width={34} height={34} alt="검색" />
                    )}
                </button>
                <button onClick={openMenu}>
                    {overlap ? (
                        <Image
                            src={isScroll ? Menu : MenuWhite}
                            width={34}
                            height={34}
                            alt="메뉴"
                        />
                    ) : (
                        <Image src={Menu} width={34} height={34} alt="메뉴" />
                    )}
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
