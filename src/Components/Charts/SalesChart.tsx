import ReactApexChart from "react-apexcharts";
import { salesChartData1 } from "../../Services/Constants";

export const SalesChart = () => {
  const series = [
    {
      name: "time",
      data: salesChartData1,
    },
  ];
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },

    dataLabels: {
      enabled: false,
    },
    // xaxis: {
    //   type: "datetime",
    //   tickAmount: 10,
    //   labels: {
    //     formatter: function (value: any, { category }: { category: string }) {
    //       // Format the timestamp to display hours and AM/PM
    //       const date = new Date(value);
    //       const hours = date.getHours();
    //       const ampm = hours >= 12 ? "pm" : "am";
    //       return `${category} - ${hours % 12 || 12} ${ampm}`;
    //     },
    //   },
    // },
    title: {
      text: "Hourly Sales",
      align: "center",
      style: {
        fontSize: "24px",
        fontWeight: "Bold",
        fontFamily: undefined,
        color: "#263238",
      },
    },
    markers: {
      size: 0,
      style: "hollow",
    },
    toolbar: {
      show: false, // Hide the toolbar
    },
    yaxis: {
      show: true,
      min: 0,
      max: 3000,
      tickAmount: 3,
      labels: {
        style: {
          fontSize: "14px", // Set the font size for x-axis labels
          fontWeight: 600, // Set the font weight for x-axis labels
        },
      },
    },
    xaxis: {
      type: "datetime",
      datetimeFormatter: {
        hour: "HH:mm",
      },
      tickAmount: 9, // Set for 9 ticks to show labels for each hour
      labels: {
        formatter: (value: string) => {
          // Convert x-axis values (milliseconds) to hours and format label
          const date = new Date(value);
          const hours = date.getHours();
          return hours % 12 === 0 ? "12am" : `${hours % 12}am`; // Adjust format as needed
        },

        style: {
          fontSize: "14px", // Set the font size for x-axis labels
          fontWeight: 600, // Set the font weight for x-axis labels
        },
      },

      axisTicks: {
        enable: false,
      },
      offsetX: 38,
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 23,
      },
    },
    tooltip: {
      enabled: false, // Disable tooltips
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#00ff00", // Set the ending color to green
            opacity: 1,
          },
          {
            offset: 100,
            color: "#99ff99", // Set the starting color to green
            opacity: 0.7,
          },
        ],
      },
    },
    selection: "one_year",
    stroke: {
      width: 2,
      curve: "smooth",
      lineCap: "round",
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          colors: ["#00E396"],
        },
      },
    },
  };
  return (
    <div id="chart-timeline">
      <ReactApexChart
        options={options as ApexCharts.ApexOptions}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};
