import { ComponentWithChildren } from "@/types/props";

export default function AuthLayout({ children }: ComponentWithChildren) {
  return (
    <main className="flex items-center justify-center min-w-full min-h-screen overflow-hidden bg-base-100">
      {children}
    </main>
  );
}
