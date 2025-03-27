"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  CiBookmark,
  CiCalendar,
  CiNoWaitingSign,
  CiWarning,
} from "react-icons/ci";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Cargando...</p>;

  return (
    <>
      <div className="p-8 w-full bg-blue-900 text-left">
        <h1 className="text-3xl font-bold text-white">Bienvenido/a 👋🏻</h1>
        <label className="text-md font-normal text-slate-300">
          Comienza el día administrando la información de las citas.
        </label>
      </div>

      <div className="p-3.5">
        <div className="text-left my-3 ml-0.5">
          <h2 className="text-lg font-semibold text-gray-900">Citas</h2>
        </div>
        <div className="grid grid-cols-4 gap-28">
          <div className="block w-72 p-6 bg-blue-900 hover:bg-blue-500 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
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

          <div className="block w-72 p-6 bg-blue-500 hover:bg-blue-800 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
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

          <div className="block w-72 p-6 bg-blue-500 hover:bg-blue-800 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
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
      </div>
    </>
  );
}
