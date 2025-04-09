"use client";

import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Footer from "@/components/footer/Footer";
import { useFileDetails } from "@/functions/patients/patients";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  CiBeaker1,
  CiCalendar,
  CiCreditCard2,
  CiFileOn,
  CiImageOn,
  CiPhone,
  CiStethoscope,
} from "react-icons/ci";
import patientPhoto from "@/assets/images/paciente1.png";
import Link from "next/link";
import NoData from "@/components/results/noData/NoData";

export const PatientDetailsPage = () => {
  const pathname = usePathname();
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
      <div className="m-2 p-3.5 bg-white rounded-md h-auto">
        <div>
          <h1 className="text-black text-2xl font-bold">Perfil de Paciente</h1>
          <label className="text-gray-600 text-sm font-normal">
            Ficha de Información personal y médica.
          </label>
        </div>
        <div className="flex space-y-4 space-x-4">
          <div className="w-2/5">
            <div className="mt-4 border rounded-xl p-5">
              <div className="flex">
                <div className="flex items-center space-x-3">
                  <Image
                    className="w-16 h-16 rounded-2xl shadow-2xl object-cover"
                    // src={fileDetails?.files?.[0]?.details?.file_path}
                    src={patientPhoto}
                    alt={`${fileDetails.name} photo`}
                  />
                  <h1 className="text-black text-xl font-bold">
                    {fileDetails.name}
                  </h1>
                </div>
              </div>
              <div className="text-left my-4">
                <h2 className="text-gray-600 font-semibold text-sm">
                  {" "}
                  Información general{" "}
                </h2>
                <div className="mt-2 text-sm font-normal">
                  <div className="space-y-3">
                    {fileDetails?.files?.[0]?.emergency_contact_1 && (
                      <div className="flex items-center text-blue-900">
                        <CiPhone size={20} className="mr-1" />
                        <label className="text-gray-500 text-xs font-medium">
                          {fileDetails?.files?.[0]?.emergency_contact_1}
                        </label>
                      </div>
                    )}
                    {fileDetails?.files?.[0]?.emergency_contact_2 && (
                      <div className="flex items-center text-blue-900">
                        <CiPhone size={20} className="mr-1" />
                        <label className="text-gray-500 text-xs font-medium">
                          {fileDetails?.files?.[0]?.emergency_contact_2}
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 border rounded-xl p-5">
              <div className="flex">
                <div className="flex items-center space-x-3">
                  <h1 className="text-black text-xl font-bold">
                    Últimos resultados de laboratorio
                  </h1>
                </div>
              </div>
              <div className="my-4 space-y-4">
                {fileDetails?.files?.[0]?.details?.[0]?.latest_lab_results
                  .length === 0 && <NoData />}
                {fileDetails?.files?.[0]?.details?.[0]?.latest_lab_results.map(
                  (result: any, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      {result.file_extension === ".pdf" ? (
                        <CiFileOn size={30} className="text-red-500" />
                      ) : (
                        <CiImageOn size={30} className="text-green-500" />
                      )}
                      <p className="text-black text-sm font-medium">
                        {result.file_path.split("/").pop()},{" "}
                        <label className="text-xs text-gray-500">
                          Tamaño: {result.file_size}
                        </label>
                        <br />
                        <label className="text-xs text-gray-500">
                          Subido el: {result.created_at}
                        </label>
                      </p>
                    </div>
                  )
                )}
                {fileDetails?.files?.[0]?.details?.[0]?.latest_lab_results
                  .length > 0 && (
                  <div className="flex justify-start items-center space-x-3">
                    <button className="mt-1 border-2 border-blue-900 text-blue-900 rounded px-4 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white transition duration-300">
                      Subir archivo
                    </button>
                    <Link
                      href={`/patients/patient/lab_results/${id}`}
                      className="mt-1 border-2 border-blue-900 text-blue-900 rounded px-4 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white transition duration-300"
                    >
                      Ver todos
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-4/5">
            <div className="border rounded-xl p-5">
              <h1 className="text-black text-xl font-bold">
                Información Personal
              </h1>

              <div className="grid grid-cols-3 gap-3 my-4">
                <div className="flex items-center space-x-3">
                  <div>
                    <p className="text-gray-600 font-semibold text-sm">
                      Género:
                    </p>
                    <label className="text-black font-semibold text-xs">
                      {fileDetails?.files?.[0]?.sex === "M"
                        ? "Masculino"
                        : "Femenino"}
                    </label>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold text-sm">
                    Fecha de nacimiento
                  </p>
                  <label className="text-black font-semibold text-xs">
                    {fileDetails?.birthDate}
                  </label>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold text-sm">
                    Ocupación
                  </p>
                  <label className="text-black font-semibold text-xs">
                    {fileDetails?.files?.[0].occupation} en{" "}
                    {fileDetails?.files?.[0].institution}
                  </label>
                </div>

                <div>
                  <p className="text-gray-600 font-semibold text-sm">
                    Última cita
                  </p>
                  <label className="text-black font-semibold text-xs">
                    {fileDetails?.files?.[0]?.details?.[0].last_appointment}
                  </label>
                </div>

                <div>
                  <p className="text-gray-600 font-semibold text-sm">
                    Próxima cita
                  </p>
                  <label className="text-black font-semibold text-xs">
                    {fileDetails?.files?.[0]?.details?.[0].next_appointment}
                  </label>
                </div>

                <div>
                  <p className="text-gray-600 font-semibold text-sm">
                    Alergias
                  </p>
                  <label className="text-black font-semibold text-xs">
                    {fileDetails?.files?.[0]?.details?.[0]?.description}
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-4 border rounded-xl p-5">
              <h1 className="text-black text-xl font-bold">
                Información de Paciente
              </h1>
              <div className="grid grid-cols-2 gap-4 my-4">
                <Link href={`/patients/patient/appointments/${id}`}>
                  <div className="border rounded-xl p-5 hover:bg-blue-300 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-300 rounded-full p-3">
                        <CiCalendar size={22} className="text-blue-900" />
                      </div>
                      <label className="font-semibold text-lg cursor-pointer">
                        Citas
                      </label>
                    </div>
                  </div>
                </Link>

                <Link href={`/patient_doctors/${id}`}>
                  <div className="border rounded-xl p-5 hover:bg-blue-300 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-300 rounded-full p-3">
                        <CiStethoscope size={22} className="text-blue-900" />
                      </div>
                      <label className="font-semibold text-lg cursor-pointer">
                        Doctores
                      </label>
                    </div>
                  </div>
                </Link>

                <Link href={`/lab_results/patient/${id}`}>
                  <div className="border rounded-xl p-5 hover:bg-blue-300 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-300 rounded-full p-3">
                        <CiBeaker1 size={22} className="text-blue-900" />
                      </div>
                      <label className="font-semibold text-lg cursor-pointer">
                        Pruebas y Resultados
                      </label>
                    </div>
                  </div>
                </Link>

                <Link href={`/payments_historial/${id}`}>
                  <div className="border rounded-xl p-5 hover:bg-blue-300 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-300 rounded-full p-3">
                        <CiCreditCard2 size={22} className="text-blue-900" />
                      </div>
                      <label className="font-semibold text-lg cursor-pointer">
                        Cuentas
                      </label>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PatientDetailsPage;
