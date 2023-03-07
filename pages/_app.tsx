import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import { AdminLayout, AuthLayout, MainLayout } from "@/components/layouts";
import "@/styles/globals.css";
import Providers from "@/components/wrapper/providers";

export default function App({ Component, pageProps, router }: AppProps) {
  const { pathname } = router;
  const authRoute = pathname.startsWith("/auth");
  const adminRoute = pathname.startsWith("/admin");

  return (
    <Providers session={pageProps.session}>
      {authRoute && (
        <AuthLayout>
          <AnimatePresence initial={false} mode="wait">
            <Component key={pathname} {...pageProps} />
          </AnimatePresence>
        </AuthLayout>
      )}
      {adminRoute && (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      )}
      {!authRoute && !adminRoute && (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </Providers>
  );
}
