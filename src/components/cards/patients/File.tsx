import Image from "next/image";
import doctor from "@/assets/images/logo.png";
import { CiFolderOn } from "react-icons/ci";
import SeeMore from "@/components/buttons/seeMore/SeeMore";
import { useEffect, useState } from "react";

const File = () => {
  const [patients, setPatients] = useState<
    { id: number; firstName: string; lastName: string }[]
  >([]);

  const getPatients = async () => {
    const response = await fetch("/api/patients", {
      method: "GET",
    });
    const patientsData = await response.json();

    setPatients(patientsData);

    return patients;
  };

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-12">
      {patients.map((patient, index) => (
        <div
          key={index}
          className="block w-full p-6 bg-white border shadow-lg rounded-xl cursor-pointer"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="rounded w-2/5 bg-blue-500 p-3.5">
              <Image src={doctor} width={80} height={80} alt="Profile Photo" />
            </div>
            <div className="w-3/5 ml-2">
              <div className="flex mb-1">
                <h2 className="text-blue-900 text-sm font-semibold">
                  {patient.name}
                </h2>
              </div>
              <div className="flex items-center mb-1">
                <div className="rounded bg-blue-200 p-0.5">
                  <CiFolderOn size={15} className="text-blue-500" />
                </div>
                <label className="text-gray-500 text-xs font-normal ml-1">
                  Ficha #000000001
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-1">
            <label className="text-blue-900 text-xs font-semibold">
              Sexo:{" "}
            </label>
            <label className="text-end text-black text-xs font-normal">
              {patient.gender}
            </label>
          </div>
          <div className="flex justify-between mb-1">
            <label className="text-blue-900 text-xs font-semibold">
              Ocupación:
            </label>
            <label className="text-end text-black text-xs">
              {patient.occupation}
            </label>
          </div>
          <div className="flex justify-between mb-1">
            <label className="text-blue-900 text-xs font-semibold">
              Institución:
            </label>
            <label className="text-end text-black text-xs">
              {patient.institution}
            </label>
          </div>
          <div className="flex justify-between mb-1">
            <label className="text-blue-900 text-xs font-semibold">
              Contacto de emergencia:
            </label>
            <label className="text-end text-black text-xs font-normal">
              {patient.emergency_contact}
            </label>
          </div>
          <div className="items-start">
            <SeeMore link="#" label="Ver detalles" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default File;
