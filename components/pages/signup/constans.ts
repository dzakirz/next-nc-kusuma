import { InputProps } from "@/types/props";
import * as Yup from "yup";

export const signupStylesMock = {
  label: {
    valid: "font-medium text-sm lg:text-base",
    error: "font-medium text-sm lg:text-base text-error",
  },
  input: {
    valid:
      "w-full px-2 py-2 text-sm lg:text-base lg:px-3 border-2 bg-base-100 rounded-xl focus:outline-none border-secondary focus:border-primary focus:ring-1 focus:ring-primary",
    error:
      "w-full px-2 py-2 text-sm lg:text-base lg:px-3 border-2 bg-base-100 rounded-xl focus:outline-none border-error focus:border-error focus:ring-1 focus:ring-error",
  },
};

export const signupFormikMock = {
  initialValues: {
    address: "",
    city: "",
    postcode: "",
    password: "",
    confpassword: "",
  },
  validationSchema: Yup.object({
    address: Yup.string()
      .required("Alamat Lengkap harus diisi")
      .trim("Alamat Lengkap tidak boleh menggunakan spasi di awal")
      .strict(true)
      .matches(
        /^(\S+\s{0,1})+\S+$/,
        "Alamat hanya boleh menggunakan satu spasi di antara kata",
      ),
    city: Yup.string()
      .required("Nama kota harus diisi")
      .trim("Nama kota tidak boleh menggunakan spasi di awal")
      .strict(true)
      .matches(/^\S+$/, "Nama kota tidak boleh menggunakan spasi"),
    postcode: Yup.string()
      .required("Kodepos harus diisi")
      .trim("Kodepos tidak boleh menggunakan spasi di awal")
      .strict(true)
      .min(5, "Kodepos minimal 5 angka")
      .matches(/^\S+$/, "Kodepos tidak boleh menggunakan spasi"),
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
