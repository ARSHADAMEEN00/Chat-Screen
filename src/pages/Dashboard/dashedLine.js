import React from "react"
import ReactApexChart from "react-apexcharts"

const DashedLine = () => {
  const series = [
    {
      name: "Orders",
      data: [5, 10, 20, 25, 30, 35, 10, 50, 70, 100, 10, 30],
    },
    {
      name: "Revenue",
      data: [0, 10, 15, 30, 40, 50, 100, 70, 80, 50, 90, 100],
    },
    {
      name: "Outlets",
      data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 80],
    },
  ]
  const options = {
    chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
    colors: ["#556ee6", "#f46a6a", "#34c38f"],
    dataLabels: { enabled: !1 },
    stroke: { width: [3, 4, 3], curve: "straight", dashArray: [0, 8, 5] },
    title: { text: "Overall Statistics", align: "left" },
    markers: { size: 0, hover: { sizeOffset: 6 } },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (e) {
              return e + " every ten"
            },
          },
        },
        {
          title: {
            formatter: function (e) {
              return e + " per session"
            },
          },
        },
        {
          title: {
            formatter: function (e) {
              return e
            },
          },
        },
      ],
    },
    grid: { borderColor: "#f1f1f1" },
  }

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height="380"
    />
  )
}

export default DashedLine
