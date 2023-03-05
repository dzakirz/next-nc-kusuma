import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
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

        const user = {
          id: "1",
          email,
          role: "user",
        };

        if (email !== "dzaki@gmail.com") {
          return null;
        }

        if (password === "12345") {
          return user;
        }

        return null;
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
};

export default NextAuth(authOptions);
