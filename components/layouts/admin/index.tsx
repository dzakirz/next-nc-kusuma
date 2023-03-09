import { useContext } from "react";
import { ComponentWithChildren } from "@/types/props";
import { sidebarContext } from "@/lib/context/sidebar-context";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { AnimatePresence, motion as m } from "framer-motion";

export default function AdminLayout({ children }: ComponentWithChildren) {
  const { sidebarActive } = useContext(sidebarContext);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <AnimatePresence initial={false}>
        {sidebarActive ? (
          <Sidebar />
        ) : (
          <m.main key="main" className="pt-[60px]">
            {children}
          </m.main>
        )}
      </AnimatePresence>
    </div>
  );
}
