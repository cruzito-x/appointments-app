import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Footer from "@/components/footer/Footer";
import { CiCircleQuestion } from "react-icons/ci";

export default function HelpPage() {
  return (
    <>
      <Breadcrumbs icon={<CiCircleQuestion size={22} />} home="Pacientes" />
      <div className="m-2 p-3.5 bg-white rounded-md">
        <div>
          <h1 className="text-black text-lg font-semibold">Ayuda</h1>
          <label className="text-gray-600 text-sm font-normal">
            Encuentra la información necesaria para resolver tus dudas.
          </label>
        </div>
      </div>
      <Footer />
    </>
  );
}
