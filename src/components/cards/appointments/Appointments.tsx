import SeeMore from "@/components/buttons/seeMore/SeeMore";
import { CiCalendar, CiClock2, CiMedicalMask } from "react-icons/ci";

const Appointments = () => {
  return (
    <div className="grid grid-cols-6 gap-5">
      <div className="block w-64 p-6 bg-white border shadow-lg  rounded-xl cursor-pointer">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-black text-sm font-semibold">
            Dr. Jorge Martínez
          </h2>
          <div className="flex items-center">
            <span className="rounded-full bg-green-500 p-1"></span>
            <label className="text-gray-600 text-xs font-normal ml-1">
              Activa
            </label>
          </div>
        </div>

        <div className="flex items-center mb-2">
          <CiMedicalMask size={15} className="text-gray-600" />
          <h2 className="text-gray-600 text-xs font-normal ml-1">Juan Pérez</h2>
        </div>
        <div className="flex items-center mb-2">
          <CiClock2 size={15} className="text-gray-600" />
          <h2 className="text-gray-600 text-xs font-normal ml-1">
            12:30 PM - 01:00 PM
          </h2>
        </div>
        <div className="flex items-center mb-2">
          <CiCalendar size={15} className="text-gray-600" />
          <h2 className="text-gray-600 text-xs font-normal ml-1">
            31 Mar. 2025
          </h2>
        </div>

        <SeeMore link="#" label="Ver detalles" />
      </div>
    </div>
  );
};

export default Appointments;
