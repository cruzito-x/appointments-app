import Image from "next/image";
import personal from "@/assets/images/personal.webp";
import { CiCalendar, CiUndo, CiWarning } from "react-icons/ci";
import { useEffect, useState } from "react";

const Appointments = () => {
  const [counters, setCounters] = useState<number[]>([]);
  const [semanalCounters, setSemanalCounters] = useState<number[]>([]);
  const icons: Array<any> = [
    <CiCalendar size={21} className="text-white" />,
    <CiUndo size={21} className="text-white" />,
    <CiWarning size={21} className="text-white" />,
  ];
  const titles: Array<String> = ["Programadas", "Reprogramadas", "Canceladas"];
  const subtitles: Array<String> = [
    `+${semanalCounters[0]} desde la semana pasada.`,
    `+${semanalCounters[1]} desde la semana pasada.`,
    `+${semanalCounters[2]} desde la semana pasada.`,
  ];

  const colors = [900, 700, 500];
  const hoverColors = [700, 500, 300];

  useEffect(() => {
    setCounters([43, 12, 32]);
    setSemanalCounters([15, 8, 5]);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 mb-3">
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`block w-72 p-6 bg-blue-${
            colors[index % colors.length]
          } hover:bg-blue-${
            hoverColors[index % hoverColors.length]
          } border border-slate-200 shadow-xl rounded-xl cursor-pointer`}
        >
          <div className="flex items-center mb-5">
            {icon}
            <h2 className="text-white text-md font-normal ml-1">
              {titles[index]}
            </h2>
          </div>
          <p className="text-white text-3xl font-semibold">
            {counters[index]} <br />
            <label className="mt-2 text-white font-normal text-xs">
              {subtitles[index]}
            </label>
          </p>
        </div>
      ))}
      <div className="w-72 h-36 z-10">
        <Image className="mb-10" src={personal} alt="doctor image" />
      </div>
    </div>
  );
};

export default Appointments;
