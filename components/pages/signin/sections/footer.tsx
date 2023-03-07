import Link from "next/link";

export default function SigninFooterSection() {
  return (
    <footer className="flex flex-col gap-2 text-center">
      <p>Belum memiliki akun?</p>
      <Link
        href="/auth/signup"
        className="self-center w-24 underline text-secondary"
      >
        Mendaftar
      </Link>
    </footer>
  );
}
