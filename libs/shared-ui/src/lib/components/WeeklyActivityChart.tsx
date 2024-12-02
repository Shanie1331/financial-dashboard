import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const WeeklyActivityChart = ({isMobileView}: {isMobileView: boolean}) => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Withdraw",
        data: [480, 350, 320, 480, 150, 390, 400],
        backgroundColor: "#232323",
        borderRadius: 8,
        maxBarThickness: isMobileView? 8: 15,
        borderSkipped: false,
      },
      {
        label: "Deposit",
        data: [240, 120, 280, 380, 250, 250, 330],
        backgroundColor: "#396AFF",
        borderRadius: 8,
        maxBarThickness: isMobileView? 8: 15,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        align: "end" as const,
        labels: {
          usePointStyle: true,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "#ffffff",
        titleColor: "#1D1D1D",
        bodyColor: "#4F8FF0",
        borderColor: "#E5E7EB",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#718EBF",
          font: {
            size: 13,
            weight: 400,
          },
        },
        barPercentage: 0.7,
        categoryPercentage: 0.8,
      },
      y: {
        beginAtZero: true,
        max: 500,
        grid: {
          color: "#F3F3F5",
        },
        ticks: {
          stepSize: 100,
          color: "#718EBF",
          font: {
            size: 13,
            weight: 400,
          },
        },
      },
    },
  };

  return (
    <div className={` w-full ${isMobileView? 'p-5 h-[250px]': ' p-10 h-[380px]'} bg-white rounded-3xl`}>
      <div className="relative h-full w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default WeeklyActivityChart;
