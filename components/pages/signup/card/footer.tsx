import Link from "next/link";

export default function SignupCardFooter() {
  return (
    <footer className="flex flex-col gap-2 text-center">
      <p>Sudah memiliki akun?</p>
      <Link
        href="/auth/signin"
        className="self-center w-16 underline text-secondary"
      >
        Masuk
      </Link>
    </footer>
  );
}
