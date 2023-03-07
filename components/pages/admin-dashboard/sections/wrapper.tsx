import { ComponentWithChildren } from "@/types/props";

export default function DashboardWrapper({ children }: ComponentWithChildren) {
  return (
    <div className="p-4 py-4 space-y-2">
      <header>
        <h1 className="text-2xl font-bold">
          Admin
          <span className="text-base font-light">
            /Dashboard<span className="font-bold text-secondary">.</span>
          </span>
        </h1>
      </header>
      <main className="space-y-6">{children}</main>
    </div>
  );
}
