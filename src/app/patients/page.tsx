"use client";

import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import File from "@/components/cards/patients/File";
import Footer from "@/components/footer/Footer";
import Loading from "@/components/loading/Loading";
import Searchbar from "@/components/searchbars/patients/Searchbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiMedicalMask } from "react-icons/ci";

export default function PatientsPage() {
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
      <Breadcrumbs icon={<CiMedicalMask size={22} />} home="Pacientes" />
      <div className="m-2 p-3.5 bg-white rounded-md">
        <div>
          <h1 className="text-black text-lg font-semibold">Pacientes</h1>
          <label className="text-gray-600 text-sm font-normal">
            Administra y gestiona tus pacientes.
          </label>
        </div>

        <div className="my-5">
          <Searchbar />
          <File />
        </div>
      </div>
      <Footer />
    </>
  );
}
