import SeeMore from "@/components/buttons/seeMore/SeeMore";
import NoData from "@/components/results/noData/NoData";
import { useFiles } from "@/functions/dashboard/dashboard";
import { CiFolderOn } from "react-icons/ci";

const Files = () => {
  const files = useFiles();

  return (
    <div className="block w-full h-auto p-6 my-6 bg-white border-slate-200 shadow-xl rounded-xl">
      <div className="flex items-center">
        <CiFolderOn size={22} className="text-blue-900" />
        <h2 className="text-sm font-semibold text-blue-900 ml-1">
          Expedientes recientes
        </h2>
      </div>
      <div className="space-y-2 mt-1">
        {files.length > 0 ? (
          <>
            {files.map((file, index) => (
              <div
                key={index}
                className="items-center p-3 bg-white border rounded-lg shadow-sm"
              >
                <div className="flex items-center justify-between px-2">
                  <label className="w-4/5 text-sm font-bold text-blue-700">
                    {file.name}
                  </label>
                  <div className="flex items-center w-1/5">
                    <span className="text-xs font-normal text-gray-600">
                      {file.files[0].created_at || "00/00/0000"}
                    </span>
                  </div>
                </div>
                <p className="px-2 text-xs text-gray-600">
                  Expediente: #{String(file.id).padStart(9, "0")} <br />
                  Dr. Asignado: Dr. Mendoza <br />
                  Próxima cita: {file.files[0].details[0].next_appointment}
                </p>
              </div>
            ))}
            <div className="items-start px-2">
              <SeeMore link="/patients" label="Ver todos" />
            </div>
          </>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Files;
