type InputTextType = {
  label: string;
  placeholder?: string;
  id: string;
  formik: any;
  error: any;
  labelClass: { valid: string; error: string };
  inputClass: { valid: string; error: string };
};

export default function InputTextarea({
  label,
  placeholder,
  id,
  formik,
  error,
  labelClass,
  inputClass,
}: InputTextType) {
  return (
    <div className="flex flex-col gap-1 ">
      <label
        htmlFor={id}
        className={error ? labelClass.error : labelClass.valid}
      >
        {error ? error : label}
      </label>
      <textarea
        {...formik.getFieldProps(id)}
        placeholder={placeholder}
        className={`h-[100px] ${error ? inputClass.error : inputClass.valid}`}
      />
    </div>
  );
}