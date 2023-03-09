type InputTextDisabledType = {
  label: string;
  id: string;
  value?: string;
  labelClass: { valid: string; error: string };
  inputClass: { valid: string; error: string };
};

export default function InputTextDisabled({
  label,
  id,
  value,
  labelClass,
  inputClass,
}: InputTextDisabledType) {
  return (
    <div className="flex flex-col gap-1 ">
      <label htmlFor={id} className={labelClass.valid}>
        {label}
      </label>
      <input type="text" disabled value={value} className={`${inputClass.valid} font-semibold`} />
    </div>
  );
}
