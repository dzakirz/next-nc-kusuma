import { InputProps } from "@/types/props";
import * as Yup from "yup";

export const signupStylesMock = {
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

export const signupFormikMock = {
  initialValues: {
    name: "",
    email: "",
    password: "",
    confpassword: "",
  },
  validationSchema: Yup.object({
    name: Yup.string()
      .required("Nama Lengkap tidak boleh kosong")
      .trim("Nama Lengkap tidak boleh menggunakan spasi di awal")
      .strict(true)
      .matches(
        /^(\w+\s)*\w+$/,
        "Hanya boleh menggunakan satu spasi di antara kata",
      ),
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
    confpassword: Yup.string()
      .required("Konfirmasi password harus diisi")
      .oneOf([Yup.ref("password"), null as any], "Password tidak cocok"),
  }),
};

export const signupInputMock: InputProps[] = [
  {
    variant: "text",
    id: "name",
    label: "Nama Lengkap",
    placeholder: "Masukkan Nama Lengkap",
  },
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
  {
    variant: "password",
    id: "confpassword",
    label: "Password",
    placeholder: "Masukkan Konfirmasi Password",
  },
];
