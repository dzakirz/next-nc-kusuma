import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";

import AuthLayout from "@/layouts/AuthLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;

  return (
    <SessionProvider session={pageProps.session}>
      <AuthLayout>
        <AnimatePresence initial={false} mode="wait">
          <Component key={pathname} {...pageProps} />
        </AnimatePresence>
      </AuthLayout>
    </SessionProvider>
  );
}
