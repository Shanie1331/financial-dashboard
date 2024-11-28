import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const WeeklyActivityChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Deposits',
        data: [200, 300, 400, 500, 600, 700, 800],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Withdrawals',
        data: [150, 250, 350, 450, 550, 650, 750],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h4 className="text-lg font-bold mb-2">Weekly Activity</h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeeklyActivityChart;
