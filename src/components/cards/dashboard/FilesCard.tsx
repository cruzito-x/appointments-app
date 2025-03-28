import { CiFolderOn } from "react-icons/ci";

const FilesCard = () => {
  return (
    <div className="block w-full h-auto p-6 my-5 bg-white  border-slate-200 shadow-xl rounded-xl">
      <div className="flex items-center">
        <CiFolderOn size={21} color="#1e3a8a" />
        <h2 className="text-sm font-semibold text-blue-900 ml-1">
          Expedientes nuevos
        </h2>
      </div>
      <div className="space-y-3 mt-3">
        <div className="items-center p-3 bg-white border rounded-lg shadow-sm">
          <div className="flex items-center justify-between px-2">
            <label className="text-sm font-bold text-blue-700">
              Juan Arnulfo Pérez Galvez
            </label>
            <div className="flex items-center">
              <span className="text-xs font-bold ml-2 text-black">
                12:25 md
              </span>
            </div>
          </div>
          <p className="px-2 text-xs text-gray-600">
            Expediente: 1234567890
            <br />
            Dr. Asignado: Dr. Mendoza <br />
            Próxima cita: 15/03/26
          </p>
        </div>

        <div className="items-center p-3 bg-white border rounded-lg shadow-sm">
          <div className="flex items-center justify-between px-2">
            <label className="text-sm font-bold text-blue-700">
              Juan Arnulfo Pérez Galvez
            </label>
            <div className="flex items-center">
              <span className="text-xs font-bold ml-2 text-black">
                12:25 md
              </span>
            </div>
          </div>
          <p className="px-2 text-xs text-gray-600">
            Expediente: 1234567890
            <br />
            Dr. Asignado: Dr. Mendoza <br />
            Próxima cita: 15/03/26
          </p>
        </div>

        <div className="items-center p-3 bg-white border rounded-lg shadow-sm">
          <div className="flex items-center justify-between px-2">
            <label className="text-sm font-bold text-blue-700">
              Juan Arnulfo Pérez Galvez
            </label>
            <div className="flex items-center">
              <span className="text-xs font-bold ml-2 text-black">
                12:25 md
              </span>
            </div>
          </div>
          <p className="px-2 text-xs text-gray-600">
            Expediente: 1234567890
            <br />
            Dr. Asignado: Dr. Mendoza <br />
            Próxima cita: 15/03/26
          </p>
        </div>

        <div className="items-start px-2">
          <a
            href="/files"
            className="w-24 py-2 text-blue-900 hover:text-blue-500 font-normal text-sm"
          >
            Ver todos &gt;&gt;&gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default FilesCard;
