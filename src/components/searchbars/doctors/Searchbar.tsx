import { useState } from "react";
import { CiStethoscope } from "react-icons/ci";

const Searchbar = () => {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");

  return (
    <div className="flex justify-between">
      <div className="flex space-x-3">
        <div className="bg-gray-100 w-full max-w-xs p-1 flex items-center mb-3 rounded">
          <CiStethoscope size={22} className="text-gray-400 m-2" />
          <input
            className="bg-gray-100 outline-none text-sm flex-1 p-2"
            type="text"
            placeholder="Nombre de doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
        </div>
        <button
          className="px-4 py-2 mb-3 rounded-md bg-white text-xs font-semibold text-blue-900 border border-blue-900 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300"
          type="submit"
        >
          Buscar
        </button>
      </div>
      <button
        className="px-4 py-2 mb-3 rounded-md bg-white text-xs font-semibold text-blue-900 border border-blue-900 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300"
        type="button"
      >
        Añadir doctor
      </button>
    </div>
  );
};

export default Searchbar;
