import { ComponentWithChildren } from "@/types/props";

export default function AuthLayout({ children }: ComponentWithChildren) {
  return (
    <main className="min-h-screen min-w-full flex justify-center items-center">
      {children}
    </main>
  );
}
