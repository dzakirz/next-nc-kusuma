import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import {
  SignCardWrapper,
  SigninCardHeader,
  SigninCardBody,
  SigninCardFooter,
} from "@/components/pages/signin";

export default function Signin() {
  return (
    <SignCardWrapper>
      <SigninCardHeader />
      <SigninCardBody />
      <SigninCardFooter />
    </SignCardWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
