import Image from "next/image";

type LeftIconButtonType = {
  title: string;
  icon: any;
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "error"
    | "warning"
    | "info";
};

export default function LeftIconButton({
  title,
  icon,
  color = "secondary",
}: LeftIconButtonType) {
  return (
    <div
      className={`flex items-center justify-center gap-2 py-3 text-base font-semibold shadow-lg cursor-pointer lg:py-2 text-opacity-70 lg:text-lg  rounded-xl bg-${
        color === "secondary" ? "secondary" : color
      }
    hover:bg-${color === "secondary" ? "secondary" : color}-focus`}
    >
      <Image src={icon} width={25} height={25} alt="google-icon" />
      <p>{title}</p>
    </div>
  );
}
