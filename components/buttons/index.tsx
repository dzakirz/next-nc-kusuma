import LeftIconButton from "./variants/left-icon";
import NormalButton from "./variants/normal";
import { Styles } from "./constants";

type ButtonType = {
  variant: "normal" | "left-icon";
  icon?: any;
  title: string;
  type?: "button" | "submit";
  color: any,
};

export const ButtonColor = Styles;

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
