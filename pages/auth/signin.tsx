import Image from "next/image";
import GoogleIcon from "@/public/google.svg";
import Link from "next/link";
import { motion as m } from "framer-motion";

export default function Signin() {
  return (
    <m.main
      initial={{ x: 400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -400, opacity: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="px-3 lg:px-5 py-5 lg:py-10 w-full flex flex-col gap-3 mx-5 lg:w-[400px] backdrop-blur-lg bg-white rounded-xl shadow-xl border-2 border-opacity-50 border-neutral"
    >
      <section className="text-center">
        <h1 className="text-2xl font-bold text-primary lg:text-3xl">
          Nutrition Club
        </h1>
        <h1 className="text-3xl font-extrabold text-p lg:text-4xl">Kusuma</h1>
      </section>
      <section>
        <form
          method="post"
          action="/api/auth/callbacks/credentials"
          className="flex flex-col gap-3 mx-5 lg:mx-7"
        >
          <input type="hidden" defaultValue={"csrfToken"} />
          <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Masukkan Email"
              className="w-full px-3 py-2 border-2 bg-base-100 rounded-xl border-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan Password"
              className="w-full px-3 py-2 border-2 bg-base-100 rounded-xl border-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="py-3 mt-2 text-base font-semibold shadow-lg lg:py-2 lg:text-lg text-opacity-70 bg-primary rounded-xl hover:bg-primary-focus"
          >
            Masuk
          </button>
          <div className="flex items-center justify-center gap-2 py-3 text-base font-semibold shadow-lg cursor-pointer lg:py-2 text-opacity-70 lg:text-lg bg-secondary rounded-xl hover:bg-secondary-focus">
            <Image src={GoogleIcon} width={25} height={25} alt="google-icon" />
            <p>Masuk Dengan Google</p>
          </div>
        </form>
      </section>
      <section className="flex flex-col gap-2 text-center">
        <p>Belum memiliki akun?</p>
        <Link
          href="/auth/signup"
          className="self-center w-24 underline text-secondary"
        >
          Mendaftar
        </Link>
      </section>
    </m.main>
  );
}
