import { ComponentWithChildren } from "@/types/props";

export default function AdminLayout({ children }: ComponentWithChildren) {
  return (
    <main>
      Admin
      {children}
    </main>
  );
}
