import { salesDetails, total } from "../Services/Constants";
import { IoMdArrowDropup } from "react-icons/io";
import DataCard from "./DataCard";
import BarChart from "./Charts/BarChart";
import AreaChart from "./Charts/AreaChart";

export default function DashboardMain() {
  return (
    <div className="w-full md:h-[28rem]  bg-transparent flex flex-col md:flex-row  items-center justify-center ">
      <div className="w-screen md:w-[55%] p-4 md:p-0 h-full md:h-[93%] gap-3 bg-transparent">
        {/* card Section */}
        <div className="md:w-[100%] w-full h-[30%] flex justify-center items-center">
          <div className="md:w-[94%] w-full h-[100%] px-6 bg-transparent grid md:grid-cols-5 grid-cols-4 gap-2 p-3 md:p-0">
            {salesDetails.map((item, i) => {
              const iconToRender = item?.Icon ? item.Icon : null;
              return <DataCard Icon={iconToRender} key={i} item={item} />;
            })}
          </div>
        </div>
        {/* bar chart section */}
        <div className="w-full md:h-[80%] h-[100%] bg-transparent flex flex-col md:flex-row justify-between items-center p-6 gap-4">
          <div className="md:h-[95%] h-[50%] w-[100%] md:w-[80%] bg-black rounded-lg ">
            <div className="w-full h-5 bg-transparent flex justify-between items-center pt-5 px-5">
              <p className="text-xs text-white">Sales wise comparison</p>
              <div className="flex text-green-600 items-center">
                <IoMdArrowDropup size={20} />
                <p className="text-[10px]"> 3%</p>
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <BarChart />
            </div>
          </div>
          {/* Total payment and purchase section */}
          <div className="md:h-[95%] h-48 w-[100%] md:w-[30%] bg-black  rounded-lg text-white flex flex-col justify-between items-center p-5">
            <p className="text-xs ">Total Purchase</p>
            <div>
              <p className="text-xs">Cash / 23</p>
              <div className="flex items-center">
                <p className="text-violet-700">{total?.purchase?.cash}</p>
                <p className="ps-1 text-xs">AED</p>
              </div>
            </div>
            <div>
              <p className="text-xs">Credit / 11</p>
              <div className="flex items-center">
                <p className="text-violet-700">{total?.purchase?.credit}</p>
                <p className="ps-1 text-xs">AED</p>
              </div>
            </div>
          </div>
          <div className="md:h-[95%] h-48 w-[100%] md:w-[30%] bg-black rounded-lg flex flex-col justify-between items-center p-5 text-white">
            <p className="text-xs ">Total Payments</p>
            <div>
              <p className="text-xs">Cash / 12</p>
              <div className="flex items-center">
                <p className="text-red-500">{total?.payment?.cash}</p>
                <p className="ps-1 text-xs">AED</p>
              </div>
            </div>
            <div>
              <p className="text-xs">Cheque / 2</p>
              <div className="flex items-center">
                <p className="text-orange-400">{total?.payment?.cheque}</p>
                <p className="ps-1 text-xs">AED</p>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
      {/* graph chart */}
      <div className="md:w-[35%] w-[85%] h-[30%] md:h-[95%]  bg-black rounded-lg ">
        <div className="w-full h-20 md:h-14 flex flex-col md:flex-row">
          <div className="md:w-[70%] w-full h-full flex justify-end items-center  text-center pe-5  md:pt-0">
            <p className="font-semibold text-xs w-full text-white">
              Day wise comparison
            </p>
          </div>
          <div className="w-[50%] md:w-[30%] h-full flex justify-center items-center ps-5 md:ps-0 pe-3 content-center">
            <button className="w-fit px-3 h-6  font-semibold rounded-md text-xs text-black bg-white">
              Day
            </button>
            <button className="w-fit px-3 h-6 rounded-md text-xs text-white">
              Month
            </button>
          </div>
        </div>
        <div className="p-3">
          <p className="w-full h-auto ps-4 text-xs pt-2 text-white">price</p>
          <AreaChart />
        </div>
      </div>
    </div>
  );
}
