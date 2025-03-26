"use client";

import { useSession, signOut } from "next-auth/react";
import Sidebar, { SidebarItem } from "@/components/sidebar/Sidebar";
import {
  CiCalendar,
  CiCircleQuestion,
  CiLogin,
  CiReceipt,
  CiStethoscope,
  CiWavePulse1,
} from "react-icons/ci";
import { PiFaceMaskLight } from "react-icons/pi";

export default function ClientSidebar() {
  const { data: session } = useSession();

  return (
    <Sidebar>
      <SidebarItem
        icon={<CiWavePulse1 size={20} />}
        text="Dashboard"
        link="/dashboard"
      />
      <SidebarItem
        icon={<CiCalendar size={20} />}
        text="Citas"
        link="/appointments"
      />
      <SidebarItem
        icon={<PiFaceMaskLight size={20} />}
        text="Pacientes"
        link="/patients"
      />
      <SidebarItem
        icon={<CiStethoscope size={20} />}
        text="Doctores"
        link="/doctors"
      />
      <SidebarItem
        icon={<CiReceipt size={20} />}
        text="Facturación"
        link="/billing"
      />

      <hr className="my-3 mr-3 ml-3" />
      <SidebarItem
        icon={<CiCircleQuestion size={20} />}
        text="Ayuda"
        link="/help"
      />
      <SidebarItem
        icon={<CiLogin size={20} />}
        text="Cerrar Sesión"
        onClick={() => signOut()}
      />
    </Sidebar>
  );
}
