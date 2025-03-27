"use client";

import { useSession, signOut } from "next-auth/react";
import Sidebar, { SidebarItem } from "@/components/sidebar/Sidebar";
import {
  CiCalendar,
  CiCircleQuestion,
  CiGrid42,
  CiLogin,
  CiReceipt,
  CiStethoscope,
} from "react-icons/ci";
import { PiFaceMaskLight } from "react-icons/pi";
import Header from "../header/Header";

export default function ClientSidebar() {
  const { data: session } = useSession();

  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<CiGrid42 size={22} />}
          text="Dashboard"
          link="/dashboard"
          active
        />
        <SidebarItem
          icon={<CiCalendar size={22} />}
          text="Citas"
          link="/appointments"
        />
        <SidebarItem
          icon={<PiFaceMaskLight size={22} />}
          text="Pacientes"
          link="/patients"
        />
        <SidebarItem
          icon={<CiStethoscope size={22} />}
          text="Doctores"
          link="/doctors"
        />
        <SidebarItem
          icon={<CiReceipt size={22} />}
          text="Facturación"
          link="/billing"
        />

        <hr className="border-1 border-white ml-4 mr-4 mt-10" />
        <SidebarItem
          icon={<CiCircleQuestion size={22} />}
          text="Ayuda"
          link="/help"
        />
        <SidebarItem
          icon={<CiLogin size={22} />}
          text="Cerrar Sesión"
          onClick={() => signOut()}
        />
      </Sidebar>
    </div>
  );
}
