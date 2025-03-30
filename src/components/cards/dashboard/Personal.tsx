import {
  CiHeart,
  CiLollipop,
  CiMedicalCross,
  CiStethoscope,
  CiWheat,
} from "react-icons/ci";

const Personal = () => {
  const icons = [
    <CiStethoscope size={21} className="text-white" />,
    <CiWheat size={21} className="text-white" />,
    <CiLollipop size={21} className="text-white" />,
    <CiHeart size={21} className="text-white" />,
    <CiMedicalCross size={21} className="text-white" />,
  ];

  const titles = [
    "Med. General",
    "Dermatología",
    "Pediatría",
    "Cardiología",
    "Enfermería",
  ];

  const counters = [120, 150, 180, 210, 240];

  const colors = ["bg-blue-900", "bg-blue-700", "bg-blue-500", "bg-blue-300"];
  const hoverColors = [
    "hover:bg-blue-700",
    "hover:bg-blue-500",
    "hover:bg-blue-300",
    "hover:bg-blue-300",
  ];

  return (
    <div className="mb-3">
      <div className="flex">
        <div className="grid grid-cols-4 gap-3 mb-3">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`block w-full p-6 ${colors[index]} ${hoverColors[index]} border border-slate-200 shadow-xl rounded-xl cursor-pointer`}
            >
              <div className="flex items-center mb-5">
                {icon}
                <h2 className="text-white text-sm font-normal ml-1">
                  {titles[index]}
                </h2>
              </div>
              <label className="text-white text-3xl font-semibold">
                {counters[index]}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Personal;
