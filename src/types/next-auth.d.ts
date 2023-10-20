import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      createdAt: string;
      deleteAt?: string;
      email: string;
      emailVerified?: boolean;
      exp: number;
      hashedPassword?: string;
      iat: number;
      id: string;
      image: string;
      isDelete: boolean;
      jti: string;
      name: string;
      picture: string;
      sub: string;
      updatedAt: string;
    };
  }
}
