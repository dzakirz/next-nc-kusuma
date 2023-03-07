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

export default function SigninMainSection() {
  const { initialValues, validationSchema } = signinFormikMock;
  const formik = useFormik({
    initialValues,
    validationSchema,
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
        <Button
          variant="left-icon"
          title="Masuk Dengan Google"
          icon={GoogleIcon}
          color={buttonColor.leftIcon.secondary}
        />
      </form>
    </main>
  );
}
