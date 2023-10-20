"use client";

import Image from "next/image";
import styled from "styled-components";
import { Colors } from "@/styles/Colors";

import Naver from "/public/images/icons/icon_naver.png";
import Kakao from "/public/images/icons/icon_kakao.png";
import Google from "/public/images/icons/icon_google.png";
import { signIn } from "next-auth/react";

interface Props {
  mode: string;
}

export default function SnsButtons({ mode }: Props) {
  const socialLogin = (type: string) => {
    if (type === "naver") {
      alert("준비중");
    } else {
      signIn(type);
    }
  };

  return (
    <SnsButtonsGroup>
      <SnsButton
        $sns="naver"
        onClick={() => {
          socialLogin("naver");
        }}
      >
        <Image src={Naver} width={32} height={32} alt="네이버" />
        <span>네이버 {mode}</span>
      </SnsButton>
      <SnsButton
        $sns="kakao"
        onClick={() => {
          socialLogin("kakao");
        }}
      >
        <Image src={Kakao} width={32} height={32} alt="카카오" />
        <span>카카오 {mode}</span>
      </SnsButton>
      <SnsButton
        $sns="google"
        onClick={() => {
          socialLogin("google");
        }}
      >
        <Image src={Google} width={32} height={32} alt="구글" />
        <span>구글로 {mode}</span>
      </SnsButton>
    </SnsButtonsGroup>
  );
}

const SnsButtonsGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2.6rem 0;
`;
const SnsButton = styled.button<{ $sns: "naver" | "kakao" | "google" }>`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: 600;

  ${({ $sns }) => {
    switch ($sns) {
      case "naver":
        return `
          background-color: ${Colors.sns.naver};
          color: ${Colors.white};
        `;
      case "kakao":
        return `
          background-color: ${Colors.sns.kakao};
          color: ${Colors.black3};
        `;
      case "google":
        return `
          background-color: ${Colors.white};
          color: ${Colors.black3};
          border: 1px solid ${Colors.sns.google};
        `;
    }
  }}
`;
