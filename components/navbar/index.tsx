import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full h-[60px] fixed top-0 left-0 flex justify-between items-center p-4">
      <div className="flex flex-col justify-center h-full text-center">
        <h2 className="text-[13px] text-primary font-semibold">
          Nutrition Club
        </h2>
        <h1 className="font-bold text-[14px]">Kusuma</h1>
      </div>
      <div className="lg:hidden">
        <HiMenuAlt3 size={25} />
      </div>
    </nav>
  );
}
