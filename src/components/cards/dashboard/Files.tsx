import SeeMore from "@/components/buttons/seeMore/SeeMore";
import { CiFolderOn } from "react-icons/ci";

const Files = () => {
  return (
    <div className="block w-full h-auto p-6 my-5 bg-white border-slate-200 shadow-xl rounded-xl">
      <div className="flex items-center">
        <CiFolderOn size={22} className="text-blue-900" />
        <h2 className="text-sm font-semibold text-blue-900 ml-1">
          Expedientes nuevos
        </h2>
      </div>
      <div className="space-y-2 mt-1">
        <div className="items-center p-3 bg-white border rounded-lg shadow-sm">
          <div className="flex items-center justify-between px-2">
            <label className="text-sm font-bold text-blue-700">
              Juan Arnulfo Pérez Galvez
            </label>
            <div className="flex items-center">
              <span className="text-xs font-normal ml-2 text-gray-600">
                27/03/2025
              </span>
            </div>
          </div>
          <p className="px-2 text-xs text-gray-600">
            Expediente: 1234567890 <br />
            Dr. Asignado: Dr. Mendoza <br />
            Primera cita: 15/03/26
          </p>
        </div>

        <div className="items-center p-3 bg-white border rounded-lg shadow-sm">
          <div className="flex items-center justify-between px-2">
            <label className="text-sm font-bold text-blue-700">
              Juan Arnulfo Pérez Galvez
            </label>
            <div className="flex items-center">
              <span className="text-xs font-normal ml-2 text-gray-600">
                26/03/2025
              </span>
            </div>
          </div>
          <p className="px-2 text-xs text-gray-600">
            Expediente: 1234567890 <br />
            Dr. Asignado: Dr. Mendoza <br />
            Primera cita: 15/03/26
          </p>
        </div>

        <div className="items-center p-3 bg-white border rounded-lg shadow-sm">
          <div className="flex items-center justify-between px-2">
            <label className="text-sm font-bold text-blue-700">
              Juan Arnulfo Pérez Galvez
            </label>
            <div className="flex items-center">
              <span className="text-xs font-normal ml-2 text-gray-600">
                22/03/2025
              </span>
            </div>
          </div>
          <p className="px-2 text-xs text-gray-600">
            Expediente: 1234567890 <br />
            Dr. Asignado: Dr. Mendoza <br />
            Primera cita: 15/03/26
          </p>
        </div>

        {/* <div className="items-start px-2">
          <SeeMore link="/files" label="Ver todos" />
        </div> */}
      </div>
    </div>
  );
};

export default Files;
