"use client";

import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import NoData from "@/components/results/noData/NoData";
import { useFileDetails } from "@/functions/patients/patients";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiFileOn, CiImageOn } from "react-icons/ci";

const LabResultsByPatient = () => {
  const pathname = usePathname();
  const id = parseInt(pathname.split("/").pop());
  const fileDetails = useFileDetails(id);

  return (
    <>
      <Breadcrumbs
        icon={<></>}
        home="Pacientes"
        first_title="Listado de Pacientes"
        first_title_link="/patients"
        second_title="Detalles de Paciente"
        second_title_link={`/patients/patient_details/${id}`}
        third_title={`${fileDetails?.name} | Resultados de Laboratorio`}
      />
      <div className="m-2 p-3.5 bg-white rounded-md h-auto">
        <div>
          <h1 className="text-black text-2xl font-bold">
            Lista de resultados de laboratorio
          </h1>
          <label className="text-gray-600 text-sm font-normal">
            Paciente: {fileDetails?.name} <br />
            Expediente: #{String(fileDetails?.id).padStart(9, "0")}
          </label>
        </div>
        <div className="my-4 space-y-4">
          <div className="grid grid-cols-5 gap-5 my-4">
            {fileDetails?.files?.[0]?.details?.[0]?.latest_lab_results
              .length === 0 && <NoData />}
            {fileDetails?.files?.[0]?.details?.[0]?.latest_lab_results.map(
              (result: any, index: number) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-2 w-full cursor-pointer hover:bg-slate-100 transition duration-300"
                >
                  <div className="flex items-center space-x-3">
                    {result.file_extension === ".pdf" ? (
                      <CiFileOn size={80} className="text-red-500" />
                    ) : (
                      <CiImageOn size={80} className="text-green-500" />
                    )}
                    <p className="text-black text-sm font-medium">
                      {result.file_path.split("/").pop()} <br />
                      <label className="text-xs text-gray-500">
                        Tamaño: {result.file_size}
                      </label>
                      <br />
                      <label className="text-xs text-gray-500">
                        Subido el: {result.created_at}
                      </label>
                    </p>
                  </div>
                  <Link
                    href={result.file_path}
                    target="_blank"
                    className="mt-1 border-2 border-blue-900 text-xs text-blue-900 rounded px-2 py-1 inline-block font-semibold hover:bg-blue-900 hover:text-white transition duration-300"
                    onClick={() => {}}
                  >
                    Ver archivo
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LabResultsByPatient;
