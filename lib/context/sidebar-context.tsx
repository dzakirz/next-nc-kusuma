import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ComponentWithChildren } from "@/types/props";
import { useRouter } from "next/dist/client/router";

interface SidebarContextInterface {
  sidebarActive: boolean;
  setSidebarActive: Dispatch<SetStateAction<boolean | undefined>>;
  toggleSidebar: () => void;
  dashboardRoute: string;
  manageUserRoute: string;
  manageProductRoute: string;
}

export const sidebarContext = createContext({} as SidebarContextInterface);

export default function SidebarProvider({ children }: ComponentWithChildren) {
  const router = useRouter();
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const manageUserRoute = router.pathname === "/admin/manage-users" ? "bg-base-100" : "";
  const manageProductRoute = router.pathname === "/admin/manage-products" ? "bg-base-100" : "";
  const dashboardRoute = router.pathname === "/admin" ? "bg-base-100" : "";

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const value = {
    sidebarActive,
    setSidebarActive,
    toggleSidebar,
    dashboardRoute,
    manageUserRoute,
    manageProductRoute,
  } as SidebarContextInterface;

  return (
    <sidebarContext.Provider value={value}>{children}</sidebarContext.Provider>
  );
}
