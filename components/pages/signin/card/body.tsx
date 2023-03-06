import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Styles } from "../constants";
import GoogleIcon from "@/public/google.svg";
import Input from "@/components/inputs";
import Button from "@/components/buttons";
import { ButtonColor } from "@/components/buttons";

export default function SigninCardBody() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email harus diisi")
        .email("Format email salah"),
      password: Yup.string()
        .required("Password harus diisi")
        .trim("Password tidak boleh menggunakan spasi")
        .strict(true)
        .min(8, "Password minimal 8 character")
        .max(16, "Password maksimal 8 character")
        .matches(/^\S+$/, "Password tidak boleh menggunakan spasi"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit(values, formikHelpers) {
      console.log(values.password);
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
        <Input
          variant="text"
          id="email"
          label="Email"
          placeholder="Masukkan Email"
          formik={formik}
          error={formik.errors.email}
          inputClass={Styles.input}
          labelClass={Styles.label}
        />
        <Input
          variant="password"
          id="password"
          label="Password"
          placeholder="Masukkan Password"
          formik={formik}
          error={formik.errors.password}
          inputClass={Styles.input}
          labelClass={Styles.label}
        />
        <Button
          variant="normal"
          type="submit"
          title="Masuk"
          color={ButtonColor.normal.primary}
        />
        <Button
          variant="left-icon"
          title="Masuk Dengan Google"
          icon={GoogleIcon}
          color={ButtonColor.leftIcon.secondary}
        />
      </form>
    </main>
  );
}
