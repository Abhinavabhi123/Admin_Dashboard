import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function NavSection() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    // Nav bar
    <div className="w-full relative h-14 bg-transparent flex justify-between items-center ps-4">
      {/* left section */}
      <div className="md:w-[15%] w-[40%] bg-transparent h-full flex justify-center items-center">
        <button className="text-white text-xs" onClick={() => navigate(-1)}>
          <IoIosArrowRoundBack size={30} />
        </button>
        <h3 className="font-medium text-white  text-base max-[960px]:">
          Branch name
        </h3>
      </div>
      {/* Navigation list && middle section */}
      <div className="w-[35rem] h-full  md:flex justify-center items-center hidden ">
        <ul className="flex w-full h-10 list-none font-semibold justify-between items-center gap-3">
          <li
            className={`w-28 p-2 tracking-wider text-sm cursor-pointer text-center text-black h-full ${
              location.pathname === "/dashboard" &&
              "text-black bg-white rounded-md"
            }`}
          >
            Dashboard
          </li>
          <li className="w-28 p-2 tracking-wider text-sm text-white h-full cursor-pointer  hover:bg-slate-300 hover:text-white rounded-md" onClick={()=>navigate("/sales")}>
            Sales
          </li>
          <li className="w-28 p-2 tracking-wider text-sm text-white h-full cursor-pointer">
            Payment
          </li>
          <li className="w-28 p-2 tracking-wider text-sm text-white h-full cursor-pointer">
            TAX
          </li>
          <li className="w-28 p-2 tracking-wider text-sm text-white h-full cursor-pointer">
            MIS
          </li>
          <li className="w-80 p-2 tracking-wider text-sm text-white h-full cursor-pointer">
            Purchase entry
          </li>
        </ul>
      </div>
      {/* right section */}
      <div className="w-20  min-[1000px]:w-[30%] h-full flex items-center justify-between pe-4 ">
        <div className="text-white text-[10px] flex gap-1">
          <p className="hidden min-[1000px]:block">Export to Excel</p>
          <img src="/excel.svg" alt="excel" className="w-4" />
        </div>
        <button className="text-[10px] text-white hidden min-[1000px]:block">
          Last updated time 09-Aug-2023 08:09 AM
        </button>
        <button className="text-white hover:rotate-12">
          <IoSunnyOutline size={22}/>
        </button>
        <button
          className="md:hidden  text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? <IoMdMenu /> : <IoMdClose />}
        </button>
      </div>
      {/* Navigation section for mobile responsive design */}
      <div
        className={`w-full h-80 bg-slate-500 bg-opacity-45 absolute flex md:hidden ${
          menuOpen ? "flex" : "hidden"
        }  top-16 left-0  justify-center items-center`}
      >
        <div className="w-[80%] h-[90%] bg-black bg-opacity-100 rounded-lg">
          <ul className="w-full h-full flex flex-col justify-evenly items-center">
            <li
              className={`w-[50%] p-2 rounded-md  tracking-wider text-sm font-semibold
               h-fit cursor-pointer text-center location.pathname === "/dashboard" &&
              "text-black bg-white rounded-md"`}
            >
              Dashboard
            </li>
            <li className="w-1/2 p-2 text-white font-semibold tracking-wider text-center rounded-md text-sm  h-fit bg-slate-400 bg-opacity-40 cursor-pointer">
              Sales
            </li>
            <li className="w-1/2 p-2 text-white font-semibold tracking-wider text-center rounded-md text-sm  h-fit bg-slate-400 bg-opacity-40 cursor-pointer">
              Payment
            </li>
            <li className="w-1/2 p-2 text-white font-semibold tracking-wider text-center rounded-md text-sm  h-fit bg-slate-400 bg-opacity-40 cursor-pointer">
              TAX
            </li>
            <li className="w-1/2 p-2 text-white font-semibold tracking-wider text-center rounded-md text-sm  h-fit bg-slate-400 bg-opacity-40 cursor-pointer">
              MIS
            </li>
            <li className="w-1/2 p-2 text-white font-semibold tracking-wider text-center rounded-md text-sm  h-fit bg-slate-400 bg-opacity-40 cursor-pointer">
              Purchase entry
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
