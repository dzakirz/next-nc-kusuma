import BreadCrumbs from "@/components/breadcrumbs";
import { ComponentWithChildren } from "@/types/props";

export default function DashboardWrapper({ children }: ComponentWithChildren) {
  return (
    <div className="p-4 py-4 space-y-2">
      <BreadCrumbs title="Admin" sub="Dashboard" />
      <main className="space-y-6">{children}</main>
    </div>
  );
}
