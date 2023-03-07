import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import {
  DashboardWrapper,
  ProductsInfoSection,
  NewsSection,
  EventsSection,
} from "@/components/pages/admin-dashboard";

export default function AdminPage() {
  return (
    <DashboardWrapper>
      <ProductsInfoSection />
      <NewsSection />
      <EventsSection />
    </DashboardWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/auth/signin",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {},
  };
};
