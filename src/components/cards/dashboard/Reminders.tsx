import SeeMore from "@/components/buttons/seeMore/SeeMore";
import { CiFlag1 } from "react-icons/ci";

const Reminders = () => {
  return (
    <div className="block w-full h-auto p-6 my-5 bg-white border-slate-200 shadow-xl rounded-xl">
      <div className="flex items-center">
        <CiFlag1 size={22} className="text-blue-900" />
        <h2 className="text-sm font-semibold text-blue-900 ml-1">
          Recordatorios
        </h2>
        <span className="text-normal text-sm font-semibold ml-32">
          <button className="w-20 px-1 py-2 rounded-md bg-white text-xs font-semibold text-blue-900 border border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300">
            Añadir
          </button>
        </span>
      </div>
      <div className="space-y-3 mt-3">
        <div className="items-center p-3 bg-white border rounded-lg shadow-sm">
          <div className="flex items-center justify-between px-2">
            <label className="text-sm font-bold text-blue-700">08:30 AM</label>
            <div className="flex items-center">
              <div className="rounded-full p-1 bg-red-500"></div>
              <label className="text-xs font-bold ml-1 text-black">Alta</label>
            </div>
          </div>
          <p className="px-2 text-xs text-gray-600">
            Ordenar expedientes de los pacientes del Dr. Gómez en orden
            alfabético.
          </p>
          <div className="px-2 mt-2 flex justify-between">
            <div className="w-1/2 mr-1.5">
              <button className="w-36 p-2 rounded-md bg-white text-xs font-semibold text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white">
                Completado
              </button>
            </div>
            <div className="w-1/2 ml-1.5">
              <button className="w-36 p-2 rounded-md bg-white text-xs font-semibold text-blue-900 border border-blue-900 hover:bg-blue-900 hover:text-white">
                Cancelar
              </button>
            </div>
          </div>
        </div>

        <div className="items-center p-3 bg-white border rounded-lg shadow-sm">
          <div className="flex items-center justify-between px-2">
            <label className="text-sm font-bold text-blue-700">08:30 AM</label>
            <div className="flex items-center">
              <div className="rounded-full p-1 bg-yellow-500"></div>
              <label className="text-xs font-bold ml-1 text-black">Media</label>
            </div>
          </div>
          <p className="px-2 text-xs text-gray-600">
            Ordenar expedientes de los pacientes del Dr. Gómez en orden
            alfabético.
          </p>
          <div className="px-2 mt-2 flex justify-between">
            <div className="w-1/2 mr-1.5">
              <button className="w-36 p-2 rounded-md bg-white text-xs font-semibold text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white">
                Completado
              </button>
            </div>
            <div className="w-1/2 ml-1.5">
              <button className="w-36 p-2 rounded-md bg-white text-xs font-semibold text-blue-900 border border-blue-900 hover:bg-blue-900 hover:text-white">
                Cancelar
              </button>
            </div>
          </div>
        </div>

        <div className="items-center p-3 bg-white border rounded-lg shadow-sm">
          <div className="flex items-center justify-between px-2">
            <label className="text-sm font-bold text-blue-700">08:30 AM</label>
            <div className="flex items-center">
              <div className="rounded-full p-1 bg-green-500"></div>
              <label className="text-xs font-bold ml-1 text-black">Baja</label>
            </div>
          </div>
          <p className="px-2 text-xs text-gray-600">
            Ordenar expedientes de los pacientes del Dr. Gómez en orden
            alfabético.
          </p>
          <div className="px-2 mt-2 flex justify-between">
            <div className="w-1/2 mr-1.5">
              <button className="w-36 p-2 rounded-md bg-white text-xs font-semibold text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
                Completado
              </button>
            </div>
            <div className="w-1/2 ml-1.5">
              <button className="w-36 p-2 rounded-md bg-white text-xs font-semibold text-blue-900 border border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300">
                Cancelar
              </button>
            </div>
          </div>
        </div>

        <div className="items-start px-2">
          <SeeMore link="/reminders" label="Ver todos" />
        </div>
      </div>
    </div>
  );
};

export default Reminders;
