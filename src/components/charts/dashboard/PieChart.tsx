"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Hombres", "Mujeres", "Niños"],
    datasets: [
      {
        data: [45, 50, 30],
        backgroundColor: ["#1e3a8a", "#3b82f6", "#93c4fc"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let value = context.raw;
            return `${value} atendidos`;
          },
        },
      },
    },
  };

  return (
    <>
      <label className="text-normal text-xs text-blue-900 font-semibold">
        Últimos 30 días
      </label>
      <div className="flex items-center w-56 h-64 mx-auto">
        <Pie data={data} options={options} />
      </div>
    </>
  );
};

export default PieChart;
