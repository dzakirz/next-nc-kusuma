type InputPasswordType = {
  label: string;
  placeholder?: string;
  id: string;
  formik?: any;
  error?: any;
  labelClass: { valid: string; error: string };
  inputClass: { valid: string; error: string };
};

export default function InputPassword({
  label,
  placeholder,
  id,
  formik,
  error,
  labelClass,
  inputClass,
}: InputPasswordType) {
  return (
    <div className="flex flex-col gap-1 ">
      <label
        htmlFor={id}
        className={error ? labelClass.error : labelClass.valid}
      >
        {error ? error : label}
      </label>
      <input
        type="password"
        {...formik.getFieldProps(id)}
        placeholder={placeholder}
        className={error ? inputClass.error : inputClass.valid}
      />
    </div>
  );
}
