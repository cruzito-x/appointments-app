"use client";

import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Footer from "@/components/footer/Footer";
import { useFileDetails } from "@/functions/patients/patients";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiBandage, CiMedicalClipboard, CiMedicalMask } from "react-icons/ci";
import patientPhoto from "@/assets/images/paciente1.png";
import NoData from "@/components/results/noData/NoData";

export const PatientDetailsPage = () => {
  const tabs = ["Detalles personales", "Padecimientos", "Historial médico"];
  const links = ["#personal_details", "#conditions", "#med_history"];
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedLink, setSelectedLink] = useState(links[0]);
  const id = parseInt(pathname.split("/").pop());
  const fileDetails = useFileDetails(id);

  return (
    <>
      <Breadcrumbs
        icon={<></>}
        home="Pacientes"
        title="Listado de Pacientes"
        titleLink="/patients"
        subtitle="Detalles de Paciente"
      />
      <div className="m-2 p-3.5 bg-white rounded-md h-5/6">
        <div>
          <h1 className="text-black text-2xl font-bold">{fileDetails.name}</h1>
          <label className="text-gray-600 text-sm font-normal">
            Ficha de Información personal y médica.
          </label>
        </div>

        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-300">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, index) => (
              <li key={tab} className="me-2">
                <a
                  href={links[index]}
                  className={`inline-block pt-4 pb-4 pe-4 border-b-2 rounded-t-lg ${
                    activeTab === tab
                      ? "text-blue-500 border-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => {
                    setActiveTab(tab);
                    setSelectedLink(links[index]);
                  }}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`mt-4 ${
            selectedLink === "#personal_details" ? "" : "hidden"
          }`}
          id="personal_details"
        >
          <div className="flex">
            <Image
              className="w-64 h-64"
              // src={fileDetails?.files?.[0]?.details?.filePath}
              src={patientPhoto}
              alt={`${fileDetails.name} photo`}
            />
            <div className="ml-4 space-y-3">
              {/* <h1 className="text-black text-2xl font-bold">
                {fileDetails.name}
              </h1> */}
              <p className="text-gray-600 text-sm font-normal">
                Fecha de nacimiento:{" "}
                <label className="text-black"> {fileDetails.birthDate} </label>
              </p>
              <p className="text-gray-600 text-sm font-normal">
                Sexo:{" "}
                {fileDetails?.files?.[0]?.sex === "M" ? (
                  <label className="text-black">Masculino</label>
                ) : (
                  <label className="text-black">Femenino</label>
                )}
              </p>
              <p className="text-gray-600 text-sm font-normal">
                Ocupación:{" "}
                <label className="text-black">
                  {" "}
                  {fileDetails?.files?.[0]?.occupation}{" "}
                </label>
              </p>
              <p className="text-gray-600 text-sm font-normal">
                Institución:{" "}
                <label className="text-black">
                  {fileDetails?.files?.[0]?.institution}
                </label>
              </p>
              <p className="text-gray-600 text-sm font-normal">
                Médico asignado:{" "}
                <label className="text-black">
                  Dr. Gregorio Manuel Casas Arce
                </label>
              </p>
              <p className="text-gray-600 text-sm font-normal">
                Registrado por primera vez:{" "}
                <label className="text-black">{fileDetails.created_at}</label>
              </p>
              <p className="text-gray-600 text-sm font-normal">
                Expediente creado el:{" "}
                <label className="text-black">
                  {fileDetails?.files?.[0]?.created_at}
                </label>
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mt-4 ${selectedLink === "#conditions" ? "" : "hidden"}`}
          id="conditions"
        >
          <label className="text-gray-600 text-sm font-normal">
            Condiciones médicas registradas:
          </label>

          <div className="flex items-center mt-3">
            <h2 className="text-gray-600 text-sm font-normal ml-1">
              {fileDetails?.files?.[0]?.details?.length > 0 ? (
                <div className="space-y-2">
                  {fileDetails?.files?.[0]?.details?.map((detail, index) =>
                    detail.description.split(",").map((condition, subIndex) => (
                      <p
                        className="flex items-center"
                        key={`${index}-${subIndex}`}
                      >
                        <CiBandage
                          size={30}
                          className="text-gray-600 mr-1 -rotate-45"
                        />
                        {condition.trim()}
                      </p>
                    ))
                  )}
                </div>
              ) : (
                <p className="text-gray-600 text-sm">
                  No hay condiciones médicas registradas para este paciente.
                </p>
              )}
            </h2>
          </div>
        </div>

        <div
          className={`mt-4 ${selectedLink === "#med_history" ? "" : "hidden"}`}
          id="med_history"
        >
          {fileDetails.length > 0 ? (
            <>
              {fileDetails.map((file, index) => (
                <div
                  key={index}
                  className="block w-full p-6 bg-white border shadow-lg rounded-xl cursor-pointer"
                ></div>
              ))}
            </>
          ) : (
            <p className="text-gray-600 text-sm">
              No existe historial médico de este paciente.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PatientDetailsPage;
