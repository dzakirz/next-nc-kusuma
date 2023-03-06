export type NormalButtonType = {
  title: string;
  type?: "submit" | "button";
  color: any;
};

export default function NormalButton({ title, type, color }: NormalButtonType) {
  return (
    <button type={type} className={color}>
      {title}
    </button>
  );
}
