export type NormalButtonType = {
  title: string;
  type?: "submit" | "button";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "error"
    | "warning"
    | "info";
};

export default function NormalButton({
  title,
  type,
  color = "primary",
}: NormalButtonType) {
  return (
    <button
      type={type}
      className={`py-3 mt-2 text-base font-semibold shadow-lg lg:py-2 lg:text-lg text-opacity-70 rounded-xl bg-${
        color === "primary" ? "primary" : color
      }
      hover:bg-${color === "primary" ? "primary" : color}-focus`}
    >
      {title}
    </button>
  );
}
