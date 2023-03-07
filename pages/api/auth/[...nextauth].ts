import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleClientProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleClientProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Masukkan Email",
          type: "text",
        },
        password: {
          label: "Password",
          placeholder: "Masukkan Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          return user;
        }

        const match = await bcrypt.compare(password, user?.password!);

        if (!match) {
          console.log({ match });
          console.log({ password });
          console.log({ testpw: user?.password! });
          console.log("err in bcrypt");
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
  },
  secret: String(process.env.NEXTAUTH_SECRET),
  // pages: {
  //   signIn: "/auth/signin",
  // },
};

export default NextAuth(authOptions);
