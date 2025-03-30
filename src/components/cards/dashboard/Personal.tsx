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

  const colors = [900, 700, 500, 300];
  const hoverColors = [700, 500, 300, 300];

  return (
    <div className="mb-3">
      <div className="flex">
        <div className="grid grid-cols-4 gap-3 mb-3">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`block w-full p-6 bg-blue-${
                colors[index % colors.length]
              } hover:bg-blue-${
                hoverColors[index % hoverColors.length]
              } border border-slate-200 shadow-xl rounded-xl cursor-pointer`}
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
