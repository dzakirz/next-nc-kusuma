import { InputProps } from "@/types/props";
import * as Yup from "yup";

export const signinStylesMock = {
  label: {
    valid: "font-medium",
    error: "font-medium text-error",
  },
  input: {
    valid:
      "w-full px-3 py-2 border-2 bg-base-100 rounded-xl focus:outline-none border-secondary focus:border-primary focus:ring-1 focus:ring-primary",
    error:
      "w-full px-3 py-2 border-2 bg-base-100 rounded-xl focus:outline-none border-error focus:border-error focus:ring-1 focus:ring-error",
  },
};

export const signinFormikMock = {
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
};

export const signinInputMock: InputProps[] = [
  {
    variant: "text",
    id: "email",
    label: "Email",
    placeholder: "Masukkan Email",
  },
  {
    variant: "password",
    id: "password",
    label: "Password",
    placeholder: "Masukkan Password",
  },
];
