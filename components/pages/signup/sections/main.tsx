import { useFormik } from "formik";
import axios from "axios";
import Button from "@/components/buttons";
import Input from "@/components/inputs";
import { buttonColor } from "@/components/buttons";
import { useRouter } from "next/router";
import {
  signupStylesMock,
  signupFormikMock,
  signupInputMock,
} from "../constans";

export default function SignupMainSection({ user }: any) {
  const { initialValues, validationSchema } = signupFormikMock;
  const router = useRouter();
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    async onSubmit(values, formikHelpers) {
      const data = {
        address: values.address,
        city: values.city,
        postCode: values.postcode,
        password: values.password,
      };

      await axios.post("http://localhost:3000/api/users", data);
      router.push("/");
    },
  });

  return (
    <main>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-3 mx-5 lg:mx-7"
      >
        <Input
          variant="text-disabled"
          id="name"
          label="Nama Lengkap"
          value={user.name}
          labelClass={signupStylesMock.label}
          inputClass={signupStylesMock.input}
        />
        <Input
          variant="text-disabled"
          id="email"
          label="Email"
          value={user.email}
          labelClass={signupStylesMock.label}
          inputClass={signupStylesMock.input}
        />

        <Input
          variant="textarea"
          id="address"
          label="Alamat"
          placeholder="Masukkan Alamat"
          formik={formik}
          error={formik.errors.address}
          labelClass={signupStylesMock.label}
          inputClass={signupStylesMock.input}
        />
        <div className="flex gap-4">
          <Input
            variant="text"
            id="city"
            label="Kota"
            placeholder="Kota"
            formik={formik}
            error={formik.errors.city}
            labelClass={signupStylesMock.label}
            inputClass={signupStylesMock.input}
          />
          <Input
            variant="text"
            id="postcode"
            label="Kodepos"
            placeholder="Kodepos"
            formik={formik}
            error={formik.errors.postcode}
            labelClass={signupStylesMock.label}
            inputClass={signupStylesMock.input}
          />
        </div>
        {signupInputMock.map(({ variant, id, label, placeholder }) => {
          let error;

          switch (id) {
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
