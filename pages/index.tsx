import { GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react";

export default function HomePage() {
  return (
    <button onClick={() => signOut({ callbackUrl: "/auth/signin" })}>
      HomePage
    </button>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

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
