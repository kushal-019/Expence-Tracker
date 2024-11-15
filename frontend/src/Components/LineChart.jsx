// LineChart.js
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ category }) => {
  const [showAll, setShowAll] = useState(0);

  // Update `showAll` based on the `category` prop
  useEffect(() => {
    if (category === 'Income') setShowAll(0);
    else if (category === 'Expense') setShowAll(1);
    else setShowAll(-1);
  }, [category]);

  const expenseAmounts = [0, 0, 0, 0, 0, 100, 200, 150, 300, 250, 400, 350];
  const incomeAmounts = [200, 300, 0, 0, 0, 250, 400, 0, 0, 350, 500, 450];
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Conditionally set the datasets based on `showAll`
    let datasets = [];
    if (showAll === 1) {
      datasets.push({
        label: 'Expenses',
        data: expenseAmounts,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        fill: true
      });
    } else if (showAll === 0) {
      datasets.push({
        label: 'Income',
        data: incomeAmounts,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        fill: true
      });
    } else if (showAll === -1) {
        datasets.push({
            label: 'Expenses',
            data: expenseAmounts,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            fill: true
          });
          datasets.push({
            label: 'Income',
            data: incomeAmounts,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true
          });
    }

    // Create the chart
    const multiLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup on component unmount
    return () => {
      multiLineChart.destroy();
    };
  }, [expenseAmounts, incomeAmounts, labels, showAll]);

  return <canvas ref={chartRef}></canvas>;
};

export default LineChart;
