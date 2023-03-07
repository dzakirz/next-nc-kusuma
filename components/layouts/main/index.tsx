import { ComponentWithChildren } from "@/types/props";

export default function MainLayout({ children }: ComponentWithChildren) {
  return (
    <main>
      Main
      {children}
    </main>
  );
}
