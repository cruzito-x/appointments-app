"use client";

import { useSession, signOut } from "next-auth/react";
import Sidebar, { SidebarItem } from "@/components/sidebar/Sidebar";
import {
  CiCalendar,
  CiCircleQuestion,
  CiGrid42,
  CiLogin,
  CiMedicalMask,
  CiReceipt,
  CiStethoscope,
} from "react-icons/ci";
import { usePathname } from "next/navigation";

export default function SidebarItems() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<CiGrid42 size={22} />}
          text="Dashboard"
          link="/dashboard"
          active={pathname === "/dashboard"}
        />
        <SidebarItem
          icon={<CiCalendar size={22} />}
          text="Citas"
          link="/appointments"
          active={pathname.startsWith("/appointments")}
        />
        <SidebarItem
          icon={<CiMedicalMask size={22} />}
          text="Pacientes"
          link="/patients"
          active={pathname.startsWith("/patients")}
        />
        <SidebarItem
          icon={<CiStethoscope size={22} />}
          text="Doctores"
          link="/doctors"
          active={pathname.startsWith("/doctors")}
        />
        <SidebarItem
          icon={<CiReceipt size={22} />}
          text="Facturación"
          link="/billing"
          active={pathname.startsWith("/billing")}
        />

        <hr className="border-1 border-white ml-4 mr-4 my-5" />
        <SidebarItem
          icon={<CiCircleQuestion size={22} />}
          text="Ayuda"
          link="/help"
          active={pathname.startsWith("/help")}
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
