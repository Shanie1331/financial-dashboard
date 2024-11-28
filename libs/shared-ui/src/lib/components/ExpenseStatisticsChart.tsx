import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseStatisticsChart = () => {
  const data = {
    labels: ['Entertainment', 'Bill Expenses', 'Investments', 'Others'],
    datasets: [
      {
        label: 'Expenses',
        data: [300, 500, 200, 400],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h4 className="text-lg font-bold mb-2">Expense Statistics</h4>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpenseStatisticsChart;