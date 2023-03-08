import Head from "next/head";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import db from "@/lib/prisma";
import {
  SignupWrapper,
  SignupHeaderSection,
  SignupMainSection,
} from "@/components/pages/signup";

export default function Signin({ user }: any) {
  return (
    <>
      <Head>
        <title>NC Kusuma | Mendaftar</title>
      </Head>
      <SignupWrapper>
        <SignupHeaderSection />
        <SignupMainSection user={user} />
      </SignupWrapper>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    const user = await db.user.findUnique({
      where: { email: session?.user.email! },
      include: { userProfile: { select: { firstname: true } } },
    });

    if (user?.userProfile?.firstname) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session?.user,
    },
  };
};
