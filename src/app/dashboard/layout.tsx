import Sidebar, { SidebarItem } from "@/components/sidebar/Sidebar";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import {
  MdCalendarMonth,
  MdDateRange,
  MdOutlineDashboard,
  MdOutlineHealthAndSafety,
  MdOutlineSick,
} from "react-icons/md";
import {
  TbHealthRecognition,
  TbInvoice,
  TbLogout,
  TbMedicalCross,
} from "react-icons/tb";

export const metadata = {
  title: "Sanitos SV | Dashboard",
  description: "Panel de control de Sanitos SV",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={<MdOutlineDashboard size={20} />}
          text="Dashboard"
          link="/dashboard"
        />
        <SidebarItem
          icon={<MdCalendarMonth size={20} />}
          text="Citas"
          link="/appointments"
          alert
        />
        <SidebarItem
          icon={<MdOutlineSick size={20} />}
          text="Pacientes"
          link="/patients"
        />
        <SidebarItem
          icon={<MdOutlineHealthAndSafety size={20} />}
          text="Doctores"
          link="/doctors"
        />
        <SidebarItem
          icon={<LiaFileInvoiceDollarSolid size={20} />}
          text="Pagos"
          link="/payments"
        />
        <hr className="my-3 mr-3 ml-3" />
        <SidebarItem icon={<TbLogout size={20} />} text="Cerrar Sesión" />
      </Sidebar>
      <div className="p-3">{children}</div>
    </div>
  );
}
