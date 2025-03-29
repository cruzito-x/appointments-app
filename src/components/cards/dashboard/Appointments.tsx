import Image from "next/image";
import doctor from "@/assets/images/doctor.webp";
import { CiBookmark, CiCalendar, CiWarning } from "react-icons/ci";

const Appointments = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="block w-72 p-6 bg-blue-900 hover:bg-blue-700 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
        <div className="flex items-center mb-5">
          <CiCalendar size={21} color="#ffffff" />
          <h2 className="text-white text-md font-normal ml-1">Programadas</h2>
        </div>
        <p className="text-white text-3xl font-semibold">
          45 <br />
          <label className="mt-2 text-white font-normal text-xs">
            +5 desde la semana pasada.
          </label>
        </p>
      </div>

      <div className="block w-72 p-6 bg-blue-700 hover:bg-blue-500 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
        <div className="flex items-center mb-5">
          <CiBookmark size={21} color="#ffffff" />
          <h2 className="text-white text-md font-normal ml-1">Pendientes</h2>
        </div>
        <p className="text-white text-3xl font-semibold">
          14 <br />
          <label className="mt-2 text-white font-normal text-xs">
            Próx.: Dr. Meléndez 29/03 - 3:00 p.m.
          </label>
        </p>
      </div>

      <div className="block w-72 p-6 bg-blue-500 hover:bg-blue-300 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
        <div className="flex items-center mb-5">
          <CiWarning size={21} color="#ffffff" />
          <h2 className="text-white text-md font-normal ml-1">Canceladas</h2>
        </div>
        <p className="text-white text-3xl font-semibold">
          {" "}
          12 <br />{" "}
          <label className="mt-2 text-white font-normal text-xs">
            +3 desde la semana pasada.
          </label>
        </p>
      </div>
      <div className="w-72 h-36 z-10">
        <Image className="mb-10" src={doctor} alt="doctor image" />
      </div>
    </div>
  );
};

export default Appointments;
