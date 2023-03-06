import Image from "next/image";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Styles } from "../constants";
import GoogleIcon from "@/public/google.svg";

export default function SigninCardBody() {
  const { label, input } = Styles;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required().email(),
      password: Yup.string().required(),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit(values, formikHelpers) {
      signIn("credentials", {
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <main>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-3 mx-5 lg:mx-7"
      >
        <div className="flex flex-col gap-1 ">
          <label
            htmlFor="email"
            className={formik.errors.password ? label.error : label.valid}
          ></label>
          <input
            type="text"
            {...formik.getFieldProps("name")}
            placeholder="Masukkan Email"
            className={formik.errors.email ? input.error : input.valid}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className={formik.errors.password ? label.error : label.valid}
          >
            {formik.errors.password ? formik.errors.password : "Password"}
          </label>
          <input
            type="password"
            {...formik.getFieldProps("password")}
            placeholder="Masukkan Password"
            className={formik.errors.password ? input.error : input.valid}
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
    </main>
  );
}
