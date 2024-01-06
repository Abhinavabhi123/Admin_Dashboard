import { latestSell, topSailedProduct } from "../Services/Constants";
import DonutChart from "./Charts/DonutChart";
import List from "./Lists/LIst";

export default function AdminBottom() {
  return (
    <div className="w-full h-[50rem] md:h-64 bg-transparent flex flex-wrap justify-center items-center py-5 px-10">
      <div className="md:w-[90%] w-full h-[100%] bg-transparent flex items-center justify-between flex-nowrap flex-col md:flex-row gap-3">
        <div className=" h-[100%] w-[100%] md:w-[40%] bg-black rounded-lg flex md:p-4">
          <div className="h-full w-[60%] flex flex-col gap-5 p-6 text-white">
            <p className="text-xs font-semibold w-full">Collection distribution</p>
            <div className="w-full h-fit">
              <p className="text-[10px]">Total amount</p>
              <p><b>365.61</b> AED</p>
            </div>
            <div>

            </div>
          </div>
          <div className="h-full w-[40%] flex justify-center items-center bg-violet-400">
            <DonutChart />
          </div>
        </div>
        <div className=" h-[100%]  w-[100%] md:w-[28%] bg-black rounded-lg md:p-4">
          <div className="w-full h-8 flex items-center ps-4 text-sm py-3">
            <p className="text-white font-semibold">Top 5 selling product</p>
          </div>
          <div className="w-full h-[86%] bg-transparent flex justify-center items-center flex-col">
            {topSailedProduct.map((item, i) => {
              return <List key={i} items={item} />;
            })}
          </div>
        </div>
        <div className=" h-[100%]  w-[100%] md:w-[28%] bg-black rounded-lg md:p-4">
          <div className="w-full h-8 flex items-center ps-4 text-sm py-3">
            <p className="text-white font-semibold">Least 5 selling product</p>
          </div>
          <div className="w-full h-[86%] bg-transparent flex justify-center items-center flex-col">
            {latestSell.map((item, i) => {
              return <List key={i} items={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
