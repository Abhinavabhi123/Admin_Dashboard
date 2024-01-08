import ReactApexChart from "react-apexcharts";
import { chartData } from "../../Services/Constants";

export default function DonutChart() {
  const series = chartData;
  const options = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    dropShadow: {
      enabled: true,
    },
    stroke: {
      width: 4,
      colors: ["#000000"],
    },
    labels: ["Credit", "Credit card", "Google pay", "Cash"],
    colors: ["#bf4080", "#ff751a", "#ffff66", "#00b3b3"],
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
            },
          },
          size: "55%",
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
