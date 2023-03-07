import { useFormik } from "formik";
import Button from "@/components/buttons";
import Input from "@/components/inputs";
import { buttonColor } from "@/components/buttons";
import {
  signupStylesMock,
  signupFormikMock,
  signupInputMock,
} from "../constans";

export default function SignupCardBody() {
  const { initialValues, validationSchema } = signupFormikMock;
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit(values, formikHelpers) {
      console.log(values);
    },
  });

  return (
    <main>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-3 mx-5 lg:mx-7"
      >
        {signupInputMock.map(({ variant, id, label, placeholder }) => {
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
              labelClass={signupStylesMock.label}
              inputClass={signupStylesMock.input}
            />
          );
        })}
        <Button
          variant="normal"
          title="Mendaftar"
          type="submit"
          color={buttonColor.normal.primary}
        />
      </form>
    </main>
  );
}
