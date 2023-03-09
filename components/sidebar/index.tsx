import { sidebarContext } from "@/lib/context/sidebar-context";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import {
  HiX,
  HiDesktopComputer,
  HiUserGroup,
  HiShoppingBag,
  HiCurrencyDollar,
  HiLogout,
} from "react-icons/hi";
import Link from "next/link";

export default function Sidebar() {
  const { toggleSidebar, dashboardRoute, manageUserRoute, manageProductRoute } =
    useContext(sidebarContext);

  return (
    <m.aside
      key="sidebar"
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 400, opacity: 0 }}
      transition={{ type: "spring", duration: 0.4 }}
      className="fixed top-0 left-0 flex flex-col w-full min-h-screen gap-10 bg-white"
    >
      <div className="self-end mt-5 mr-5 text-3xl opacity-90">
        <HiX onClick={toggleSidebar} />
      </div>
      <ul className="space-y-9 text-xl font-normal text-center pt-[10px]">
        <li className="flex items-center justify-center ">
          <Link href="/admin">
            <div
              className={`flex items-center justify-center gap-3 px-4 py-2 rounded-lg hover:bg-base-100 ${dashboardRoute}`}
            >
              <div className="text-secondary">
                <HiDesktopComputer />
              </div>
              <h1>Dashboard</h1>
            </div>
          </Link>
        </li>
        <li className="flex items-center justify-center ">
          <Link href="/admin/manage-users">
            <div
              className={`flex items-center justify-center gap-3 px-4 py-2 hover:bg-base-100 rounded-lg ${manageUserRoute}`}
            >
              <div className="text-secondary">
                <HiUserGroup />
              </div>
              <h1>Kelola User</h1>
            </div>
          </Link>
        </li>
        <li className="flex items-center justify-center ">
          <Link href="/admin/manage-products">
            <div
              className={`flex items-center justify-center gap-3 px-4 py-2 hover:bg-base-100 rounded-lg ${manageProductRoute}`}
            >
              <div className="text-secondary">
                <HiShoppingBag />
              </div>
              <h1>Kelola Produk</h1>
            </div>
          </Link>
        </li>
        <li className="flex items-center justify-center ">
          <Link href="/admin">
            <div
              className={`flex items-center justify-center gap-3 px-4 py-2 hover:bg-base-100 rounded-lg`}
            >
              <div className="text-secondary">
                <HiCurrencyDollar />
              </div>
              <h1>Penjualan</h1>
            </div>
          </Link>
        </li>
        <li className="flex items-center justify-center gap-3">
          <div className="text-secondary">
            <HiLogout />
          </div>
          <h1>Keluar</h1>
        </li>
      </ul>
    </m.aside>
  );
}
