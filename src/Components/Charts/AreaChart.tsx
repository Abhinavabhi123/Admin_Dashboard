// // AreaChart.js

// import ReactApexChart from "react-apexcharts";
// import { price } from "../../Services/Constants";

// const AreaChart = () => {
//   // const areaColors = ['#33ff33'];

//   const series = [
//     {
//       name: "price",
//       data: price,
//       labels: {
//         show: false,
//       },
//     },
//   ];

//   const options = {
//     chart: {
//       type: "area",
//       height: 400,
//       toolbar: {
//         show: false,
//       },
//       distributed: true,

//     },
//     colors: ['#F08080', '#33ff33'],
//     plugins: {
//       colors: {
//         type: 'gradient',
//         gradient: {
//           type: 'horizontal', // Adjust as needed
//           shadeIntensity: 1,
//           opacityFrom: 1,
//           opacityTo: 1,
//           stops: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Adjust stop points if desired
//         },
//       },
//     },

//     xaxis: {
//       categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//       axisBorder: {
//         show: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     grid: {
//       show: false,
//     },
//   };

//   return (
//     <div className="area-chart">
//       <ReactApexChart
//         options={options as ApexCharts.ApexOptions}
//         series={series}
//         type="area"
//         height={330}
//       />
//     </div>
//   );
// };

// export default AreaChart;

import ReactApexChart from "react-apexcharts";
import { price } from "../../Services/Constants";

const AreaChart = () => {
  const series = [
    {
      name: "Rank",
      data: price,
    },
  ];

  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    fill: {
      type: "solid",
      opacity: 0, // Set opacity to 0 for a completely transparent fill
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      category: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 3000,
      labels: {
        formatter: (value:number) => {
          if (value === 0) {
            return "0";
          } else if (value === 1000) {
            return "1000+";
          }  else {
            return value.toFixed(0);
          }
        },
      },
    },
    stroke: {
      curve: "smooth",
      lineCap: "round",
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          colorStops: [
            {
              offset: 0,
              color: "#1eff00",
              opacity: 1,
            },
            {
              offset: 1000,
              color: "#ff0400",
              opacity: 1,
            },
            {
              offset: 2000,
              color: "#ff0400",
              opacity: 1,
            },
            {
              offset: 3000,
              color: "#ff0400",
              opacity: 1,
            },
          ],
        },
      },
    },

    grid: {
      show: false,
    },
  };

  return (
    <div className="area-chart">
      <ReactApexChart
        options={chartOptions as ApexCharts.ApexOptions}
        series={series}
        type="area"
        height={330}
      />
    </div>
  );
};

export default AreaChart;
