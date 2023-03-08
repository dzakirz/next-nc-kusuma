import { GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react";
import db from "@/lib/prisma";

export default function HomePage() {
  return (
    <button onClick={() => signOut({ callbackUrl: "/auth/signin" })}>
      HomePage
    </button>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    const user = await db.user.findUnique({
      where: { email: session?.user.email! },
      include: { userProfile: { select: { firstname: true } } },
    });

    if (!user?.userProfile?.firstname) {
      return {
        redirect: {
          destination: "/auth/signup",
          permanent: false,
        },
      };
    }
  }

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
