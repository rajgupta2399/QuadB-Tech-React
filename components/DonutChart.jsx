import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data = [80, 20], labels = ["Default 1", "Default 2"] }) => {
  if (!Array.isArray(data) || !Array.isArray(labels)) {
    console.error("Invalid data or labels. Ensure they are arrays.");
    return <p>Error: Invalid data format.</p>;
  }

  const chartData = {
    datasets: [
      {
        data: data,
        backgroundColor: ["#3F9132", "#142e15", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
        hoverBackgroundColor: ["#3F9132", "#142e15", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart fills the parent container
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14, // Adjust font size for better readability on smaller screens
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            return `${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container" style={{ position: "relative", width: "100%", height: "auto", maxWidth: "500px", margin: "auto" }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DonutChart;
