// BarChart.js
import ReactApexChart from "react-apexcharts";
import { salesChartData } from "../../Services/Constants";

import fr from "apexcharts/dist/locales/fr.json";
const BarChart = () => {
  // Sample data for the bar chart
  const series = [
    {
      name: "Sales",
      data: salesChartData[1].map(Number),
    },
  ];
  // Configuration options for the bar chart
  const options = {
    chart: {
      type: "bar",
      height: 100,
      toolbar: {
        show: false,
      },
      locales: [fr],
      defaultLocale: "fr",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    stroke: {
      show: false,
      width: 20,
      colors: ["transparent"],
    },
    xaxis: {
      categories: salesChartData[0],
      gridLines: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      gridLines: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => {
        return `${val} AED`; 
      },
      style: {
        fontSize: '10px', // Set font size to 12 pixels
      },
    },
  };

  return (
    <div className="chart-container">
      <ReactApexChart
        options={options as ApexCharts.ApexOptions}
        series={series}
        type="bar"
        height={200}
      />
    </div>
  );
};

export default BarChart;
