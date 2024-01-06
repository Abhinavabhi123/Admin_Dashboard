import ReactApexChart from "react-apexcharts";

export default function DonutChart() {
  const series = [44, 55, 13, 33];
  const options = {
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: "donut",
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
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
      width={200}
    />
  );
}
