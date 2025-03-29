"use client";

import Footer from "@/components/footer/Footer";
import Loading from "@/components/loading/Loading";
import Searchbar from "@/components/searchbars/appointments/Searchbar";
import Table from "@/components/table/Table";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AppointmentsPage() {
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
      name: "Paciente",
      selector: (row: any) => row.patient,
      sortable: true,
      center: true,
    },
    {
      name: "Doctor",
      selector: (row: any) => row.doctor,
      sortable: true,
      center: true,
    },
    {
      name: "Fecha",
      selector: (row: any) => row.date,
      sortable: true,
      center: true,
    },
    {
      name: "Hora",
      selector: (row: any) => row.hour,
      sortable: true,
      center: true,
    },
    {
      name: "Especialidad",
      selector: (row: any) => row.specialty,
      sortable: true,
      center: true,
    },
    {
      name: "Acción",
      selector: (row: any) => row.action,
      center: true,
    },
  ];

  const appointmentsData = [
    {
      patient: "John Doe",
      doctor: "Dr. Jane Smith",
      date: "2022-01-01",
      hour: "08:30 AM",
      specialty: (
        <button className="px-4 py-2 rounded-full border-1 border-green-500 bg-green-500 text-xs font-semibold text-green-50 border ">
          Cardiología
        </button>
      ),
      action: (
        <button className="px-4 py-2 rounded-md bg-white text-xs font-semibold text-blue-900 border border-blue-900 hover:bg-blue-500 hover:text-white">
          Ver detalles
        </button>
      ),
    },
    // Add more appointments here...
  ];

  return (
    <>
      <div className="m-2 p-3.5 bg-white rounded-md">
        <div>
          <h1 className="text-blue-900 text-lg font-semibold">Citas</h1>
          <label className="text-gray-600 text-sm font-normal">
            Administra y gestiona las citas entre pacientes y doctores.
          </label>
        </div>

        {/* <hr className="border-1 border-slate-400 my-6 w-full" /> */}
        <div className="my-6">
          <Searchbar />
          <Table columns={columns} data={appointmentsData} />
        </div>
      </div>
      <Footer />
    </>
  );
}
