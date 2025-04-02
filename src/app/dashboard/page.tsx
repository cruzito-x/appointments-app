"use client";

import DoughnutChart from "@/components/charts/dashboard/DoughnutChart";
import Attentions from "@/components/cards/dashboard/Attentions";
import Footer from "@/components/footer/Footer";
import Loading from "@/components/loading/Loading";
import Table from "@/components/table/Table";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CiMedicalCross, CiWavePulse1 } from "react-icons/ci";
import Reminders from "@/components/cards/dashboard/Reminders";
import Appointments from "@/components/cards/dashboard/Appointments";
import Files from "@/components/cards/dashboard/Files";
import Personal from "@/components/cards/dashboard/Personal";
import Reviews from "@/components/cards/dashboard/Reviews";
import HorizontalBarChart from "@/components/charts/dashboard/HorizontalBarChart";
import PieChart from "@/components/charts/dashboard/PieChart";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

export default function DashboardPage() {
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

  const patientsColumns: Array<any> = [
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

  const patientsData: Array<any> = [
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
          <div className="bg-white p-3.5 rounded-xl shadow-xl">
            <div className="text-left mb-3 ml-0.5">
              <h2 className="text-lg font-semibold text-blue-900">Citas</h2>
              <p className="text-sm text-gray-500">
                Administra tus citas con un simple clic.
              </p>
            </div>
            <Appointments />
            <div className="text-left mt-12 mb-6 ml-0.5">
              <h2 className="text-lg font-semibold text-blue-900">Pacientes</h2>
              <p className="text-sm text-gray-500">
                Administra la información de tus pacientes.
              </p>
            </div>
            <Table columns={patientsColumns} data={patientsData} length={7} />
          </div>

          <div className="flex space-x-3 mt-5">
            <div className="w-3/5">
              <div className="bg-white rounded-xl shadow-xl p-3 mb-5">
                <div className="text-left my-3 ml-0.5">
                  <h2 className="text-lg font-semibold text-blue-900">
                    Personal
                  </h2>
                  <p className="text-sm text-gray-500">
                    Administra y gestiona al personal.
                  </p>
                </div>
                <Personal />
              </div>
            </div>
            <div className="w-2/5">
              <div className="bg-white rounded-xl shadow-xl p-3 mb-5">
                <div className="text-left my-3 ml-0.5">
                  <h2 className="text-lg font-semibold text-blue-900">
                    Reviews
                  </h2>
                  <p className="text-sm text-gray-500">
                    Administra tus reviews y comentarios.
                  </p>
                </div>
                <Reviews />
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="w-1/2">
              <div className="bg-white rounded-xl shadow-xl p-3 mb-5">
                <div className="text-left my-3 ml-0.5">
                  <h2 className="text-lg font-semibold text-blue-900">
                    Tasa de diagnósticos
                  </h2>
                  <p className="text-sm text-gray-500">
                    Administra tu tasa de diagnósticos.
                  </p>
                </div>
                <div className="ml-0.5">
                  <HorizontalBarChart />
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="bg-white rounded-xl shadow-xl p-3 mb-5">
                <div className="text-left my-3 ml-0.5">
                  <h2 className="text-lg font-semibold text-blue-900">
                    Tasa de atenciones
                  </h2>
                  <p className="text-sm text-gray-500">
                    Estadísticas de atenciones por género.
                  </p>
                </div>
                <div className="ml-0.5">
                  <PieChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 p-3.5">
          <div className="h-screen text-2xl">
            <div className="block w-full p-6 bg-white border border-slate-200 rounded-xl shadow-xl">
              <div className="flex items-center">
                <CiWavePulse1 size={22} className="text-blue-900" />
                <h2 className="text-sm font-semibold text-blue-900 ml-1">
                  Actividad
                </h2>
              </div>
              <div className="w-full">
                <Attentions
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
                <CiMedicalCross size={22} className="text-blue-900" />
                <h2 className="text-sm font-semibold text-blue-900 ml-1">
                  Top 5 doctores
                </h2>
              </div>
              <DoughnutChart />
            </div>

            <Reminders />
            <Files />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
