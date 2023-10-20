"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const UserInfo = () => {
  const { data: session } = useSession();
  console.log("session", session);

  if (!session) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href={"/login"}>로그인</Link>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <span>{session.user?.name}</span>
      <span
        style={{ color: "rgb(218 75 75)" }}
        onClick={() => {
          signOut();
        }}
      >
        로그아웃
      </span>
    </div>
  );
};

export default UserInfo;
