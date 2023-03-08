import InputPassword from "./variants/password";
import InputText from "./variants/text";
import InputTextDisabled from "./variants/text-disabled";
import InputTextarea from "./variants/textarea";

type InputType = {
  variant: "password" | "text" | "textarea" | "text-disabled";
  label: string;
  placeholder?: string;
  id: string;
  formik?: any;
  error?: any;
  value?: string;
  labelClass: { valid: string; error: string };
  inputClass: { valid: string; error: string };
};

export default function Input({
  variant,
  label,
  placeholder,
  id,
  value,
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
  if (variant === "textarea") {
    return (
      <InputTextarea
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

  if (variant === "text-disabled") {
    return (
      <InputTextDisabled
        id={id}
        label={label}
        inputClass={inputClass}
        labelClass={labelClass}
        value={value}
      />
    );
  }

  return <div>no variants</div>;
}
