"use client";

import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Profile from "@/components/cards/doctors/Profile";
import Footer from "@/components/footer/Footer";
import Loading from "@/components/loading/Loading";
import Searchbar from "@/components/searchbars/doctors/Searchbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiStethoscope } from "react-icons/ci";

export default function DoctorsPage() {
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
      <Breadcrumbs icon={<CiStethoscope size={22} />} home="Doctores" />
      <div className="m-2 p-3.5 bg-white rounded-md">
        <div>
          <h1 className="text-black text-lg font-semibold">Doctores</h1>
          <label className="text-gray-600 text-sm font-normal">
            Busca y encuentra a tus doctores.
          </label>
        </div>

        <div className="my-5">
          <Searchbar />
          <Profile />
        </div>
      </div>
      <Footer />
    </>
  );
}
