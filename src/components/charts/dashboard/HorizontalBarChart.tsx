"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = () => {
  const data = {
    labels: [
      "Fracturas",
      "Hematomas",
      "Gripe",
      "Diabetes",
      "Hipertensión",
      "Covid-19",
      "Asma",
      "Alergias",
      "Migraña",
      "Artritis",
    ],
    datasets: [
      {
        data: [35, 50, 40, 30, 25, 45, 38, 20, 33, 29],
        backgroundColor: ["#1e3a8a", "#1c4fd8", "#3b82f6", "#93c4fc"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let value = context.raw;
            return `${value} casos registrados`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
      },
    },
  };

  return (
    <>
      <label className="text-normal text-xs text-blue-900 font-semibold">
        Últimos 30 días
      </label>
      <div className="w-full h-64 mx-auto">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default HorizontalBarChart;
