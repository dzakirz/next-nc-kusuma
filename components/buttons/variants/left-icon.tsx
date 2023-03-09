import Image from "next/legacy/image";

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
      <div className="w-[25px] h-[25px]">
        <Image
          src={icon}
          width={25}
          height={25}
          alt="google-icon"
        />
      </div>
      <p>{title}</p>
    </div>
  );
}
