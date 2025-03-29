"use client";

import Appointments from "@/components/cards/appointments/Appointments";
import Footer from "@/components/footer/Footer";
import Loading from "@/components/loading/Loading";
import AppointmentDetails from "@/components/modals/appointments/AppointmentDetails";
import Searchbar from "@/components/searchbars/appointments/Searchbar";
import Table from "@/components/table/Table";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AppointmentsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading />;
  }

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
          <Appointments />
        </div>
      </div>
      <Footer />
    </>
  );
}
