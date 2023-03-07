import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ComponentWithChildren } from "@/types/props";

interface SidebarContextInterface {
  sidebarActive: boolean;
  setSidebarActive: Dispatch<SetStateAction<boolean | undefined>>;
  toggleSidebar: () => void;
}

export const sidebarContext = createContext({} as SidebarContextInterface);

export default function SidebarProvider({ children }: ComponentWithChildren) {
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const value = {
    sidebarActive,
    setSidebarActive,
    toggleSidebar,
  } as SidebarContextInterface;

  return (
    <sidebarContext.Provider value={value}>{children}</sidebarContext.Provider>
  );
}
