import Button from "@/components/buttons";
import Input from "@/components/inputs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { mockSignupInput, Styles } from "../constans";
import { ButtonColor } from "@/components/buttons";

export default function SignupCardBody() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confpassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required()
        .trim()
        .strict()
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
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit(values, formikHelpers) {
      console.log(values);
    },
  });

  const errors = formik.errors;

  return (
    <main>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-3 mx-5 lg:mx-7"
      >
        {mockSignupInput.map(({ variant, id, label, placeholder }) => {
          let error;

          switch (id) {
            case "name":
              error = formik.errors.name;
              break;
            case "email":
              error = formik.errors.email;
              break;
            case "password":
              error = formik.errors.password;
              break;
            default:
              error = formik.errors.confpassword;
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
              labelClass={Styles.label}
              inputClass={Styles.input}
            />
          );
        })}
        <Button
          variant="normal"
          title="Mendaftar"
          type="submit"
          color={ButtonColor.normal.primary}
        />
      </form>
    </main>
  );
}
