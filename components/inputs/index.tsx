import InputPassword from "./variants/password";
import InputText from "./variants/text";

type InputType = {
  variant: "password" | "text";
  label: string;
  placeholder: string;
  id: string;
  formik: any;
  error: any;
  labelClass: { valid: string; error: string };
  inputClass: { valid: string; error: string };
};

export default function Input({
  variant,
  label,
  placeholder,
  id,
  formik,
  error,
  labelClass,
  inputClass,
}: InputType) {
  if (variant === "password") {
    return (
      <InputPassword
        label={label}
        placeholder={placeholder}
        id={id}
        formik={formik}
        error={error}
        labelClass={labelClass}
        inputClass={inputClass}
      />
    );
  }
  if (variant === "text") {
    return (
      <InputText
        label={label}
        placeholder={placeholder}
        id={id}
        formik={formik}
        error={error}
        labelClass={labelClass}
        inputClass={inputClass}
      />
    );
  }

  return <div>no variants</div>;
}
