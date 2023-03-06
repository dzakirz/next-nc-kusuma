import LeftIconButton from "./variants/left-icon";
import NormalButton from "./variants/normal";

type ButtonType = {
  variant: "normal" | "left-icon";
  icon?: any;
  title: string;
  type?: "button" | "submit";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "error"
    | "warning"
    | "info";
};

export default function Button({
  variant,
  title,
  type,
  color,
  icon,
}: ButtonType) {
  if (variant === "normal") {
    return <NormalButton title={title} type={type} color={color} />;
  }

  if (variant === "left-icon") {
    return <LeftIconButton title={title} icon={icon} color={color} />;
  }

  return <div>no variants</div>;
}
