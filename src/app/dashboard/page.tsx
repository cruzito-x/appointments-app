"use client";

import Loading from "@/components/loading/Loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { CiBookmark, CiCalendar, CiWarning } from "react-icons/ci";

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
    },
    {
      name: "Teléfono",
      selector: (row: any) => row.phone,
    },
    {
      name: "Cita",
      selector: (row: any) => row.appointment,
      sortable: true,
    },
    {
      name: "Especialidad",
      selector: (row: any) => row.specialty,
      sortable: true,
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
    <>
      <div className="p-3.5 overflow-y-auto">
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
        <div className="bg-white rounded-lg p-2 shadow-xl">
          <DataTable
            columns={columns}
            data={patientsData}
            pagination
            paginationPerPage={10}
            paginationComponentOptions={{
              rowsPerPageText: "",
              rangeSeparatorText: "de",
            }}
            fixedHeader
            progressComponent={<Loading />}
          />
        </div>
      </div>
    </>
  );
}
