import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import {
  signinStylesMock,
  signinFormikMock,
  signinInputMock,
} from "../constants";
import GoogleIcon from "@/public/google.svg";
import Input from "@/components/inputs";
import Button from "@/components/buttons";
import { buttonColor } from "@/components/buttons";
import { useRouter } from "next/router";
import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

export default function SigninMainSection() {
  const { initialValues, validationSchema } = signinFormikMock;
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit(values, formikHelpers) {
      const options = {
        email: values.email,
        password: values.password,
        redirect: false,
      };

      signIn("credentials", options).then((res) => {
        if (res?.ok) {
          router.push("/");
        }
        if (res?.error === "CredentialsSignin") {
          setMessage("email atau password salah");
        }
      });
    },
  });

  return (
    <main className="overflow-hidden">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-3 mx-5 lg:mx-7"
      >
        <AnimatePresence>
          {message && (
            <m.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", duration: .5 }}
              className="p-2 py-1 font-thin text-center text-white bg-error rounded-xl"
            >
              {message}
            </m.div>
          )}
        </AnimatePresence>
        {signinInputMock.map(({ variant, id, label, placeholder }) => {
          let error;

          switch (id) {
            case "email":
              error = formik.errors.email;
              break;
            default:
              error = formik.errors.password;
              break;
          }

          return (
            <Input
              key={id}
              variant={variant}
              id={id}
              label={label}
              placeholder={placeholder}
              formik={formik}
              error={error}
              labelClass={signinStylesMock.label}
              inputClass={signinStylesMock.input}
            />
          );
        })}
        <Button
          variant="normal"
          type="submit"
          title="Masuk"
          color={buttonColor.normal.primary}
        />
        <div onClick={() => signIn("google", { callbackUrl: "/" })}>
          <Button
            variant="left-icon"
            title="Masuk Dengan Google"
            icon={GoogleIcon}
            color={buttonColor.leftIcon.secondary}
          />
        </div>
      </form>
    </main>
  );
}
