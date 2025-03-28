"use client";

import DoughnutChart from "@/components/charts/dashboard/DoughnutChart";
import WeekCards from "@/components/cards/dashboard/WeekCards";
import Footer from "@/components/footer/Footer";
import Loading from "@/components/loading/Loading";
import Table from "@/components/table/Table";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CiMedicalCross, CiWavePulse1 } from "react-icons/ci";
import RemindersCard from "@/components/cards/dashboard/RemindersCard";
import AppointmentsCards from "@/components/cards/dashboard/AppointmentsCards";
import FilesCard from "@/components/cards/dashboard/FilesCard";

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

  const patientsColumns = [
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

  const doctorsColumns = [
    {
      name: "Nombre",
      selector: (row: any) => row.name,
      sortable: true,
      center: true,
    },
    {
      name: "Especialidad",
      selector: (row: any) => row.appointment,
      sortable: true,
      center: true,
    },
    {
      name: "Disponibilidad",
      selector: (row: any) => row.specialty,
      sortable: true,
      center: true,
    },
    {
      name: "Agendar cita",
      selector: (row: any) => row.specialty,
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
    <div className="w-full">
      <div className="flex">
        <div className="w-3/4 p-3.5 overflow-y-auto">
          <div className="bg-white p-3.5 rounded-xl">
            <div className="text-left mb-3 ml-0.5">
              <h2 className="text-lg font-semibold text-gray-900">Citas</h2>
              <p className="text-sm text-gray-500">
                Administra tus citas con un simple clic.
              </p>
            </div>
            <AppointmentsCards />
          </div>

          <hr className="border-1 border-slate-400 my-6 w-3/4" />

          <div className="text-left my-3 ml-0.5">
            <h2 className="text-lg font-semibold text-gray-900">Pacientes</h2>
            <p className="text-sm text-gray-500">
              Administra la información de tus pacientes.
            </p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-xl">
            <Table columns={patientsColumns} data={patientsData} />
          </div>

          <hr className="border-1 border-slate-400 my-6 w-full" />

          <div className="text-left my-3 ml-0.5">
            <h2 className="text-lg font-semibold text-gray-900">Doctores</h2>
            <p className="text-sm text-gray-500">
              Administra y gestiona las actividades del personal.
            </p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-xl mb-5">
            <Table columns={doctorsColumns} data={patientsData} />
          </div>
        </div>
        <div className="w-1/4 p-3.5">
          <div className="h-screen text-2xl">
            <div className="block w-full p-6 my-5 bg-white border border-slate-200 shadow-xl rounded-xl">
              <div className="flex items-center">
                <CiWavePulse1 size={21} color="#1e3a8a" />
                <h2 className="text-sm font-semibold text-blue-900 ml-1">
                  Actividad
                </h2>
              </div>
              <div className="w-full">
                <WeekCards
                  patientsPerDay={{
                    lun: 10,
                    mar: 15,
                    mié: 8,
                    jue: 12,
                    vie: 20,
                    sáb: 5,
                    dom: 7,
                  }}
                />
              </div>

              <hr className="my-6 border-1 border-slate-400" />
              <div className="flex items-center">
                <CiMedicalCross size={21} color="#1e3a8a" />
                <h2 className="text-sm font-semibold text-blue-900 ml-1">
                  Top 5 Doctores
                </h2>
              </div>
              <DoughnutChart />
            </div>

            <RemindersCard />

            <FilesCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
