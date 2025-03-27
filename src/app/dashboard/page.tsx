"use client";

import Footer from "@/components/footer/Footer";
import Loading from "@/components/loading/Loading";
import Table from "@/components/table/Table";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  CiBookmark,
  CiCalendar,
  CiFlag1,
  CiMedicalCross,
  CiWarning,
  CiWavePulse1,
} from "react-icons/ci";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  const columns = [
    {
      name: "Nombre",
      selector: (row: any) => row.name,
      sortable: true,
      center: true,
    },
    {
      name: "Teléfono",
      selector: (row: any) => row.phone,
      center: true,
    },
    {
      name: "Cita",
      selector: (row: any) => row.appointment,
      sortable: true,
      center: true,
    },
    {
      name: "Especialidad",
      selector: (row: any) => row.specialty,
      sortable: true,
      center: true,
    },
  ];

  const patientsData = [
    {
      id: 1,
      name: "John Doe",
      phone: "7766-7788",
      appointment: "12:30 PM - 1:30 PM",
      specialty: "Cardiología",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "6166-4495",
      appointment: "10:00 AM - 11:00 AM",
      specialty: "Dermatología",
    },
    {
      id: 3,
      name: "David Cruz",
      phone: "7415-0122",
      appointment: "1:00 PM - 2:00 PM",
      specialty: "Ginecología",
    },
    {
      id: 4,
      name: "David Cruz",
      phone: "7415-0122",
      appointment: "1:00 PM - 2:00 PM",
      specialty: "Ginecología",
    },
    {
      id: 5,
      name: "David Cruz",
      phone: "7415-0122",
      appointment: "1:00 PM - 2:00 PM",
      specialty: "Ginecología",
    },
    {
      id: 6,
      name: "David Cruz",
      phone: "7415-0122",
      appointment: "1:00 PM - 2:00 PM",
      specialty: "Ginecología",
    },
    {
      id: 7,
      name: "David Cruz",
      phone: "7415-0122",
      appointment: "1:00 PM - 2:00 PM",
      specialty: "Ginecología",
    },
    {
      id: 8,
      name: "David Cruz",
      phone: "7415-0122",
      appointment: "1:00 PM - 2:00 PM",
      specialty: "Ginecología",
    },
    {
      id: 9,
      name: "David Cruz",
      phone: "7415-0122",
      appointment: "1:00 PM - 2:00 PM",
      specialty: "Ginecología",
    },
    {
      id: 10,
      name: "David Cruz",
      phone: "7415-0122",
      appointment: "1:00 PM - 2:00 PM",
      specialty: "Ginecología",
    },
    {
      id: 11,
      name: "David Cruz",
      phone: "7415-0122",
      appointment: "1:00 PM - 2:00 PM",
      specialty: "Ginecología",
    },
  ];

  return (
    <div>
      <div className="flex">
        <div className="w-3/4 p-3.5 overflow-y-auto">
          <div className="text-left mb-3 ml-0.5">
            <h2 className="text-lg font-semibold text-gray-900">Citas</h2>
            <p className="text-sm text-gray-500">
              Administra tus citas con un simple click.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-28">
            <div className="block w-72 p-6 bg-blue-900 hover:bg-blue-700 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
              <div className="flex items-center mb-5">
                <CiCalendar size={21} color="#ffffff" />
                <h2 className="text-white text-md font-normal ml-1">
                  Programadas
                </h2>
              </div>
              <p className="text-white text-3xl font-semibold">
                45 <br />
                <label className="mt-2 text-white font-normal text-sm">
                  +5 desde la semana pasada.
                </label>
              </p>
            </div>

            <div className="block w-72 p-6 bg-blue-700 hover:bg-blue-500 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
              <div className="flex items-center mb-5">
                <CiBookmark size={21} color="#ffffff" />
                <h2 className="text-white text-md font-normal ml-1">
                  Pendientes
                </h2>
              </div>
              <p className="text-white text-3xl font-semibold">
                14 <br />
                <label className="mt-2 text-white font-normal text-sm">
                  Próx.: Dr. Meléndez 29/03 - 3:00 p.m.
                </label>
              </p>
            </div>

            <div className="block w-72 p-6 bg-blue-500 hover:bg-blue-300 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
              <div className="flex items-center mb-5">
                <CiWarning size={21} color="#ffffff" />
                <h2 className="text-white text-md font-normal ml-1">
                  Canceladas
                </h2>
              </div>
              <p className="text-white text-3xl font-semibold">
                {" "}
                12 <br />{" "}
                <label className="mt-2 text-white font-normal text-sm">
                  +3 desde la semana pasada.
                </label>
              </p>
            </div>
          </div>

          <hr className="border-1 border-slate-400 my-6" />

          <div className="text-left my-3 ml-0.5">
            <h2 className="text-lg font-semibold text-gray-900">Pacientes</h2>
            <p className="text-sm text-gray-500">
              Administra la información de tus pacientes.
            </p>
          </div>
          <div className="bg-white rounded-xl p-0.5 shadow-xl">
            <Table columns={columns} data={patientsData} />
          </div>
        </div>
        <div className="w-1/4 p-3.5">
          <div className="h-screen text-2xl">
            <div className="block w-full p-6 my-5 text-blue-900 bg-white border border-slate-200 shadow-xl rounded-xl cursor-pointer">
              <div className="flex items-center">
                <CiWavePulse1 size={21} color="#1e3a8a" />
                <h2 className="text-sm font-semibold ml-1">Actividad</h2>
              </div>
              <label className="text-normal text-sm font-semibold">
                Últimos 7 días
              </label>

              <hr className="my-6 border-1 border-slate-400" />
              <div className="flex items-center">
                <CiMedicalCross size={21} color="#1e3a8a" />
                <h2 className="text-sm font-semibold ml-1">Top 5 Doctores</h2>
              </div>
              <label className="text-normal text-sm font-semibold">
                Últimos 7 días
              </label>
            </div>

            <div className="block w-full h-auto p-6 my-5 bg-white text-blue-900 border-slate-200 shadow-xl rounded-xl cursor-pointer">
              <div className="flex items-center">
                <CiFlag1 size={21} color="#1e3a8a" />
                <h2 className="text-sm font-semibold ml-1">Recordatorios</h2>
                <span className="text-normal text-sm font-semibold ml-28">
                  <button className="text-sm font-normal ml-2 px-2 py-1 rounded-md bg-white text-blue-900 border border-blue-900 hover:bg-blue-900 hover:text-white">
                    Añadir nuevo
                  </button>
                </span>
              </div>
              <div className="space-y-4 mt-3">
                <div className="items-center p-4 bg-white border rounded-lg shadow-md">
                  <div className="flex items-center justify-between space-x-2">
                    <span className="text-xl font-bold text-blue-700">
                      08:30 AM
                    </span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-sm font-bold ml-2 text-black">
                        Alta
                      </span>
                    </div>
                  </div>
                  <p className="ml-auto text-sm font-normal text-gray-600">
                    Ordenar expedientes de los pacientes del Dr. Gómez en orden
                    alfabético.
                  </p>
                </div>

                <div className="items-center p-4 bg-white border rounded-lg shadow-md">
                  <div className="flex items-center justify-between space-x-2">
                    <span className="text-xl font-bold text-blue-700">
                      09:20 AM
                    </span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-sm font-bold ml-2 text-black">
                        Media
                      </span>
                    </div>
                  </div>
                  <p className="ml-auto mt-1 text-sm font-normal text-gray-600">
                    Recibir Paquete del Dr. Mendoza.
                  </p>
                </div>

                <div className="items-center p-4 bg-white border rounded-lg shadow-md">
                  <div className="flex items-center justify-between space-x-2">
                    <span className="text-xl font-bold text-blue-700">
                      11:50 AM
                    </span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-bold ml-2 text-black">
                        Baja
                      </span>
                    </div>
                  </div>
                  <p className="ml-auto mt-1 text-sm font-normal text-gray-600">
                    Agendar cita del Dr. Martinez con el Dr. Medina.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
