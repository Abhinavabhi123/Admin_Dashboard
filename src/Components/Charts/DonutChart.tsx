import ReactApexChart from "react-apexcharts";
import { chartData } from "../../Services/Constants";

export default function DonutChart() {
  const series = chartData;
  const options = {
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: "donut",
    },
    legend: {
      show: false, // Setting this to false will hide the legend
    },
    colors: ["#bf4080", "#ff751a", "#ffff66", "#00b3b3"],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
          radius: '60%',
        },
        expandOnClick: true,
      },
      
    },
  };
  return (
    <ReactApexChart
      options={options as ApexCharts.ApexOptions}
      series={series}
      type="donut"
      height={180}
    />
  );
}
