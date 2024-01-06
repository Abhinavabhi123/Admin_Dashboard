// AreaChart.js

import ReactApexChart from "react-apexcharts";
import { price } from "../../Services/Constants";


const AreaChart = () => {
  // Sample data for the area chart
  const series = [
    {
      name: "price",
      data: price,
      labels: {
        show: false 
      },
    },
  ];

  // Configuration options for the area chart
  const options = {
    chart: {
      type: "area",
      height: 400,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      axisBorder: {
        show: false,
      },
    },
    fill: {
      colors: ['#F44336', '#E91E63', '#9C27B0']
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
        height={250}
      />
    </div>
  );
};

export default AreaChart;
