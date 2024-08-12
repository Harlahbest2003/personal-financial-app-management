import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import data labels plugin

// Register the components required for the chart and the data labels plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels // Register the data labels plugin
);

const Reports = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Expenses',
        data: [30, 40, 35, 50, 60],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true, // Ensure fill is set properly if using a line chart
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: $${context.raw}`;
          },
        },
      },
      datalabels: {
        display: true, // Display data labels
        color: '#444',
        anchor: 'end',
        align: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [5, 5],
        },
      },
    },
  };

  return (
    <div className="reports-container" style={{ position: 'relative', height: '400px' }}>
      <h2>Expense Reports</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Reports;
