import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const BalanceHistoryChart = () => {
  const chartRef = useRef<ChartJS<'line', number[], string> | null>(null);

  const data: ChartData<'line', number[], string> = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Balance',
        data: [170, 280, 220, 430, 420, 800, 200, 600, 210, 610, 600],
        borderColor: '#4F8FF0',
        backgroundColor: 'rgba(79, 143, 240, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#ffffff',
        titleColor: '#1D1D1D',
        bodyColor: '#4F8FF0',
        borderColor: '#E5E7EB',
        borderWidth: 1,
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
          color: '#6B7280',
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: '#E5E7EB', 
          drawBorder: false,
        },
        ticks: {
          stepSize: 200,
          color: '#6B7280', // Gray ticks
          font: {
            size: 12,
          },
        },
        beginAtZero: true, // Start at 0
        suggestedMax: 800, // Match the maximum value
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current;
    if (chartInstance) {
      const ctx = chartInstance.ctx;
      const gradient = ctx.createLinearGradient(
        0,
        0,
        0,
        chartInstance.chartArea.bottom
      );
      gradient.addColorStop(0, 'rgba(79, 143, 240, 0.4)'); // Blue at the top
      gradient.addColorStop(1, 'rgba(79, 143, 240, 0)'); // Transparent at the bottom

      chartInstance.data.datasets[0].backgroundColor = gradient; // Apply gradient
      chartInstance.update(); // Re-render the chart to apply changes
    }
  }, []);

  return (
    <div className="p-4 bg-white rounded-3xl h-[280px] ">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BalanceHistoryChart;
