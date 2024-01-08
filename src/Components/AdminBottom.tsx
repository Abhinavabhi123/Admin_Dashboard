import { chartData, latestSell, topSailedProduct } from "../Services/Constants";
import DonutChart from "./Charts/DonutChart";
import List from "./Lists/LIst";

export default function AdminBottom() {
  return (
    <div className="w-full h-[51rem] md:h-72 bg-transparent flex flex-wrap justify-center items-center py-5 px-10 md:px-0">
      <div className="md:w-[90%] w-full h-[100%] bg-transparent flex items-center justify-between flex-nowrap flex-col md:flex-row gap-3">
        {/* left section 1 */}
        <div className=" h-[40%]  md:h-[100%] w-[100%] md:w-[40%] md:ms-6 bg-black rounded-lg flex flex-col items-center md:flex-row md:p-0 md:gap-0">
          <div className="md:h-full h-[30%] md:w-[70%] w-full flex flex-col gap-5 p-6 md:p-2 text-white">
            <p className="text-sm font-semibold w-full ps-4">
              Collection distribution
            </p>
            <div className="w-full h-fit ps-4">
              <p className="text-[10px] md:text-sm">Total amount</p>
              <p>
                <b>365.61</b> AED
              </p>
            </div>
            <div className="w-full h-[30%] bg-transparent mt-10 hidden md:flex flex-col justify-center items-center">
              <div className="w-[100%] h-[80%] flex flex-col justify-between text-[10px] ps-5">
                <div className="w-full h-[48%] bg-transparent flex justify-center ">
                  <div className="w-full h-[80%] flex  gap-2">
                    <div className="w-[10px] h-[10px] bg-[#00b3b3]"></div>
                    <p>Cash {chartData[3]} %</p>
                  </div>
                  <div className="w-full h-[80%] flex  gap-2">
                    <div className="w-[10px] h-[10px] bg-[#ffff66]"></div>
                    <p>Google pay {chartData[2]} %</p>
                  </div>
                </div>
                <div className="w-full h-[48%] bg-transparent flex justify-center items-center gap-1">
                  <div className="w-full h-[80%] flex  gap-2">
                    <div className="w-[10px] h-[10px] bg-[#ff751a]"></div>
                    <p >Credit card {chartData[1]} %</p>
                  </div>
                  <div className="w-full h-[80%] flex  gap-2">
                    <div className="w-[10px] h-[10px] bg-[#bf4080]"></div>
                    <p>Credit {chartData[0]} %</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DonutChart />
          <div className="w-full h-20 bg-transparent md:hidden flex text-[12px] justify-center items-center gap-4 px-4 text-white">
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#00b3b3]"></div>
              <p>Cash {chartData[3]} %</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#ffff66]"></div>
              <p>Google pay {chartData[2]} %</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#ff751a]"></div>
              <p className="overflow-hidden">Credit card {chartData[1]} %</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-[#bf4080]"></div>
              <p>Credit {chartData[0]} %</p>
            </div>
          </div>
        </div>
        {/* Middle section */}
        <div className=" md:h-[100%] h-fit p-4  w-[100%] md:w-[30%] bg-black rounded-lg md:p-4">
          <div className="w-full h-8 flex items-center ps-4 text-sm py-3">
            <p className="text-white font-semibold">Top 5 selling product</p>
          </div>
          <div className="w-full h-[86%] bg-transparent flex justify-center items-center flex-col">
            {topSailedProduct.map((item, i) => {
              return <List key={i} items={item} />;
            })}
          </div>
        </div>
        {/* Right section */}
        <div className=" md:h-[100%] h-fit p-4 w-[100%] md:w-[30%] bg-black rounded-lg md:p-4">
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
