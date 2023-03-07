import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ComponentWithChildren } from "@/types/props";

interface SidebarContextInterface {
  isSidebarActive: boolean;
  setIsSidebarActive: Dispatch<SetStateAction<boolean | undefined>>;
  toggleSidebar: () => void;
}

export const sidebarContext = createContext({} as SidebarContextInterface);

export default function SidebarProvider({ children }: ComponentWithChildren) {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);

  const toggleSidebar = (prev: boolean) => {
    setIsSidebarActive(!prev);
  };

  const value = {
    isSidebarActive,
    setIsSidebarActive,
    toggleSidebar,
  } as SidebarContextInterface;

  return (
    <sidebarContext.Provider value={value}>{children}</sidebarContext.Provider>
  );
}
