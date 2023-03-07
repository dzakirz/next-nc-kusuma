import Navbar from "@/components/navbar";
import { ComponentWithChildren } from "@/types/props";

export default function AdminLayout({ children }: ComponentWithChildren) {
  return (
    <div>
      <Navbar />
      <main className="pt-[60px]">{children}</main>
    </div>
  );
}
