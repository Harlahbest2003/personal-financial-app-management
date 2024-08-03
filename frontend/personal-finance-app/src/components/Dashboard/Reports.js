// src/components/Dashboard/Reports.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Reports = () => {
  // Example data, replace with real data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Expenses',
        data: [200, 300, 250, 400, 350, 300],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
      {
        label: 'Income',
        data: [400, 500, 450, 600, 550, 500],
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
      }
    ]
  };

  return (
    <Container>
      <h2 className="my-4">Reports and Analytics</h2>
      <Line data={data} />
    </Container>
  );
};

export default Reports;
