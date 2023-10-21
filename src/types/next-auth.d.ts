import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface User {
    created_at?: date;
    updated_at?: date;
  }
}

declare module "next-auth" {
  interface Session {
    user: User;
    accessToken: string;
    accessTokenExpires: number;
    error: string;
  }
}
