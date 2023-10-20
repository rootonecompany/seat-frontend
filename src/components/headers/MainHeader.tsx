"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import Logo from "/public/images/icons/icon_logo.png";
import HeaderButtonGroup from "./HeaderButtonGroup";
import UserInfo from "../UserInfo";

export default function MainHeader() {
  return (
    <Block>
      <Link href="/">
        <Image src={Logo} width={134} height={17} alt="TICKETPANG" priority />
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UserInfo />
        <ButtonGroup />
      </div>
    </Block>
  );
}

const Block = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.4rem 0 0.9rem;

  a {
    display: inline-flex;
    align-items: center;
    height: inherit;
  }
`;
const ButtonGroup = styled(HeaderButtonGroup)`
  position: static;
  height: inherit;
  display: flex;
  align-items: center;
  padding-right: 0;
  button {
    height: inherit;
    padding: 0.25rem;
  }
`;
