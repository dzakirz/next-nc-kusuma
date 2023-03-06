import Image from "next/image";

type LeftIconButtonType = {
  title: string;
  icon: any;
  color: any;
};

export default function LeftIconButton({
  title,
  icon,
  color,
}: LeftIconButtonType) {
  const isColor = color === "secondary" ? "secondary" : color;

  return (
    <div className={color}>
      <Image src={icon} width={25} height={25} alt="google-icon" />
      <p>{title}</p>
    </div>
  );
}
