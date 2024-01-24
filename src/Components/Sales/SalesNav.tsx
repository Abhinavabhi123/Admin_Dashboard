import { IoSunnyOutline } from "react-icons/io5";

export default function SalesNav() {
  return (
    <div className="w-full h-20 bg-white flex justify-end items-center gap-8 pe-4 shadow-md">
      <button className="text-lg text-red-500">Logout</button>
      <button className="hover:rotate-12">
        <IoSunnyOutline size={30} />
      </button>
    </div>
  );
}
