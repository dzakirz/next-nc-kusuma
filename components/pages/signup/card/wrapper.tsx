import { ComponentWithChildren } from "@/types/props";
import { motion as m } from "framer-motion";

export default function SignupCardWrapper({ children }: ComponentWithChildren) {
  return (
    <m.main
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -400, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="px-3 lg:px-5 py-5 lg:py-10 w-full flex flex-col gap-3 mx-5 lg:w-[400px] backdrop-blur-lg bg-white rounded-xl shadow-xl border-2 border-opacity-50 border-neutral"
    >
      {children}
    </m.main>
  );
}
