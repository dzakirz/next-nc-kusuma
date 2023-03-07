import SidebarProvider from "@/lib/context/sidebar-context";
import { ComponentWithChildren } from "@/types/props";
import { SessionProvider } from "next-auth/react";

export default function Providers({ session, children }: { session: any } & ComponentWithChildren) {
  return (
    <SessionProvider session={session}>
      <SidebarProvider>{children}</SidebarProvider>
    </SessionProvider>
  );
}
