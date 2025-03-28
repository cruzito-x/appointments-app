"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Dr. Pérez", "Dr. López", "Dr. Gómez", "Dr. Díaz", "Dr. Ramírez"],
    datasets: [
      {
        label: "Citas Atendidas",
        data: [45, 32, 50, 28, 40],
        backgroundColor: [
          "#1e3a8a",
          "#1d4ed8",
          "#3b82f6",
          "#93c5fd",
          "#dbeafe",
        ],
        border: "none",
        borderWidth: 0,
      },
    ],
  };

  const totalAppointments = data.datasets[0].data.reduce(
    (accumulator, number) => accumulator + number,
    0
  );

  const options = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <>
      <label className="text-normal text-sm font-semibold">
        Últimos 7 días
      </label>
      <div className="w-72 mx-auto">
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
};

export default DoughnutChart;
