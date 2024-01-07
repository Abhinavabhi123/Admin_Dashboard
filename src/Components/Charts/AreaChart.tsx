// AreaChart.js

import ReactApexChart from "react-apexcharts";
import { price } from "../../Services/Constants";


const AreaChart = () => {
  const areaColors = ['#33ff33'];
  const series = [
    {
      name: "price",
      data: price,
      labels: {
        show: false,
      },
      fill: {
        type: "solid",
      },
    },
  ];
  
  const options = {
    chart: {
      type: "area",
      height: 400,
      toolbar: {
        show: false,
      },
      distributed: true,
    },
    colors: areaColors,
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      axisBorder: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
  };

  return (
    <div className="area-chart">
      <ReactApexChart
        options={options as ApexCharts.ApexOptions}
        series={series}
        type="area"
        height={330}
      />
    </div>
  );
};

export default AreaChart;
