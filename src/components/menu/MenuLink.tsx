"use clinet";

import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { menuState } from "@/recoil/atom";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
    isLoggedIn?: boolean;
}

export default function MenuLink({ isLoggedIn = false }: Props) {
    const isMenuOpen = useSetRecoilState(menuState);

    const handleMenuClose = () => {
        isMenuOpen(false);
    };

    return (
        <MenuLinkWrapper>
            <Block>
                <Link href="/" onClick={handleMenuClose}>
                    마이페이지
                </Link>
                <Link href="/" onClick={handleMenuClose}>
                    예약/취소 내역
                </Link>
                <Link href="/" onClick={handleMenuClose}>
                    결제내역
                </Link>
            </Block>
            {isLoggedIn && (
                <Logout>
                    <button>로그아웃</button>
                </Logout>
            )}
        </MenuLinkWrapper>
    );
}

const MenuLinkWrapper = styled.div``;
const Block = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 1.35rem 0;
    border-bottom: 1px solid ${Colors.line2};

    a {
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1.2;
        color: ${Colors.black3};
        text-decoration: none;
    }
`;
const Logout = styled.div`
    margin-top: 1.35rem;

    button {
        font-size: 0.8rem;
        font-weight: 600;
        color: ${Colors.black1};
        padding: 0;
    }
`;
