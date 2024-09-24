import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";

// Register required components with Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        label: "Task Priority Distribution",
        data: [5, 3, 8], // Mock data, replace with actual task counts
        backgroundColor: ["#f9844a", "#f39c12", "#e74c3c"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Task Priority Distribution",
      },
    },
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Dashboard;
