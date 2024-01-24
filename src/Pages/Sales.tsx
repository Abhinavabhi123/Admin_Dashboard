
import { SalesChart } from "../Components/Charts/SalesChart";
import SalesNav from "../Components/Sales/SalesNav";

export default function Sales() {
  return (
    <div className="w-screen h-screen bg-white">
      <SalesNav/>
      <div className="w-full h-[38.4rem] px-20 mt-20">
        <SalesChart/>
      </div>
    </div>
  )
}
