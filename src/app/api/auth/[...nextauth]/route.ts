import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";
import { api } from "@/apis/instance.api";

let userInfo: any;

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          params: {
            scope:
              "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/user.phonenumbers.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/profile.language.read https://www.googleapis.com/auth/contacts.readonly openId https://www.googleapis.com/auth/directory.readonly",
          },
        },
      },
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        // if (!credentials?.email || !credentials?.password) {
        //   throw new Error("Invalid credentials");
        // }

        // const user = await prisma.user.findUnique({
        //   where: {
        //     email: credentials.email,
        //   },
        // });

        // if (!user || !user?.hashedPassword) {
        //   throw new Error("Invalid credentials");
        // }

        // const isCorrectPassword = await bcrypt.compare(
        //   credentials.password,
        //   user.hashedPassword
        // );

        // if (!isCorrectPassword) {
        //   throw new Error("Invalid credentials");
        // }

        // return user;
        return null;
      },
    }),
  ],
  // debug: process.env.NODE_ENV === "development",
  // session: {
  //   strategy: "jwt",
  //   maxAge: 24 * 60 * 60, // 1일
  //   updateAge: 2 * 24 * 60 * 60, // 2일
  // },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("signIn user", user);
      // console.log("signIn account", account);
      // console.log("signIn profile", profile);
      // console.log("signIn email", email);
      // console.log("signIn credentials", credentials);
      try {
        // const isEnableIdToken = await axios({
        //   method: "get",
        //   url: `https://oauth2.googleapis.com/tokeninfo?id_token=${account?.id_token}`,
        // });
        // console.log("isEnableIdToken", isEnableIdToken.data);

        // const googleUserInfo = await axios({
        //   method: "get",
        //   headers: {
        //     Authorization: `Bearer ${account?.access_token}`,
        //   },
        //   url: `https://people.googleapis.com/v1/people/me?personFields=phoneNumbers`,
        //   // url: `https://people.googleapis.com/v1/people/${user.id}?personFields=genders,birthdays`,
        // });
        // console.log("googleUserInfo", googleUserInfo.data);

        const response = await api.post("auth/userInfo", {
          user,
          account,
          profile,
        });
        console.log("signIn response", response.data);

        if (user && account && profile && response.data) {
          userInfo = response.data;
          return true;
        }
      } catch (error) {
        console.error(error, "signIn error");
      }

      return false;
    },
    async jwt({ token, user, account, profile, trigger, session }) {
      // console.log("jwt token", token);
      // console.log("jwt user", user);
      // console.log("jwt account", account);
      // console.log("jwt profile", profile);
      // console.log("jwt trigger", trigger);
      // console.log("jwt session", session);
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    // user session이 조회될 때 마다 실행
    async session({ session, token, user }: any) {
      // console.log("session session", session);
      // console.log("session token", token);
      // console.log("session user", user);
      session.userInfo = userInfo as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      } else if (new URL(url).origin === baseUrl) {
        return `${baseUrl}`;
      }
      return baseUrl;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
``;
