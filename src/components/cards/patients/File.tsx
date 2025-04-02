import Image from "next/image";
import patientPhoto from "@/assets/images/paciente1.png";
import { CiFolderOn } from "react-icons/ci";
import SeeMore from "@/components/buttons/seeMore/SeeMore";
import { useFiles } from "@/functions/dashboard/dashboard";
import NoData from "@/components/results/noData/NoData";

const File = () => {
  const patients = useFiles();

  return (
    <div className="grid grid-cols-5 gap-12">
      {patients.length > 0 ? (
        <>
          {patients.map((patient, index) => (
            <div
              key={index}
              className="block w-full p-6 bg-white border shadow-lg rounded-xl cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="rounded w-2/5 bg-blue-500">
                  <Image
                    className="w-full h-24"
                    src={patientPhoto}
                    alt="Profile Photo"
                  />
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
                      Ficha #{String(patient.id).padStart(9, "0")}
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mb-1">
                <label className="text-blue-900 text-xs font-semibold">
                  Sexo:
                </label>
                <label className="text-end text-black text-xs font-normal">
                  {patient.files[0].sex || "N/A"}
                </label>
              </div>
              <div className="flex justify-between mb-1">
                <label className="text-blue-900 text-xs font-semibold">
                  Ocupación:
                </label>
                <label className="text-end text-black text-xs">
                  {patient.files[0].occupation || "N/A"}
                </label>
              </div>
              <div className="flex justify-between mb-1">
                <label className="text-blue-900 text-xs font-semibold">
                  Institución:
                </label>
                <label className="text-end text-black text-xs">
                  {patient.files[0].institution || "N/A"}
                </label>
              </div>
              <div className="flex justify-between mb-1">
                <label className="text-blue-900 text-xs font-semibold">
                  Contacto de emergencia:
                </label>
                <label className="text-end text-black text-xs font-normal">
                  {patient.files[0].emergency_contact_1 || "N/A"}
                </label>
              </div>
              <div className="items-start">
                <SeeMore
                  link={`/patients/patient_details/${patient.id}`}
                  label="Ver detalles"
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default File;
