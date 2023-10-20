"use client";

import MainHeader from "./MainHeader";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

interface Props {
  headerContent?: React.ReactNode;
}

export default function Header({ headerContent = <MainHeader /> }: Props) {
  return (
    <>
      <Block>{headerContent}</Block>
      <HeaderFixedPadding />
    </>
  );
}

const Block = styled.header`
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  max-width: 768px;
  height: 3.6rem;
  display: flex;
  align-items: center;
  background-color: ${Colors.white};
  z-index: 9999;
`;

const HeaderFixedPadding = styled.div`
  padding-top: 3.6rem;
`;
