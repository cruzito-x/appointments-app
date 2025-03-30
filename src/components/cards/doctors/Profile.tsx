import Image from "next/image";
import doctor from "@/assets/images/logo.png";
import { CiHeart, CiMedal, CiUser } from "react-icons/ci";
import SeeMore from "@/components/buttons/seeMore/seeMore";

const Profile = () => {
  return (
    <div className="grid grid-cols-5 gap-12">
      <div className="block w-72 p-6 mt-16 bg-white border shadow-lg rounded-xl cursor-pointer">
        <div className="flex items-center justify-center mb-2">
          <div
            className="rounded-full bg-blue-500 p-3.5"
            style={{
              marginTop: "-80px",
            }}
          >
            <Image src={doctor} width={80} height={80} alt="Profile Photo" />
          </div>
        </div>
        <div className="flex justify-center mb-1">
          <h2 className="text-blue-900 text-sm font-semibold">
            Dr. Jorge Martínez
          </h2>
        </div>
        <div className="flex items-center justify-center mb-1">
          <div className="rounded bg-red-200 p-0.5">
            <CiHeart size={15} className="text-red-500" />
          </div>
          <label className="text-black text-xs font-medium ml-1">
            Médico Pediatrico
          </label>
        </div>
        <div className="flex justify-center">
          <span className="text-gray-600 text-xs">
            Precio de consulta:{" "}
            <label className="text-gray-600 text-xs"> $10 / hora </label>
          </span>
        </div>
        <div className="flex justify-center space-x-2 mt-3">
          <div className="rounded p-3 bg-slate-300 hover:bg-slate-200 flex items-center transition-all duration-300">
            <CiMedal size={22} className="text-gray-500" />
            <div className="text-gray-500 ml-3">
              <span className="text-sm font-bold">
                +7 años <br />
                <label className="text-xs font-normal">Experiencia</label>
              </span>
            </div>
          </div>
          <div className="rounded p-3 bg-slate-300 hover:bg-slate-200 flex items-center transition-all duration-300">
            <CiUser size={22} className="text-gray-500" />
            <div className="text-gray-500 ml-3">
              <span className="text-sm font-bold">
                120 <br />
                <label className="text-xs font-normal">Pacientes</label>
              </span>
            </div>
          </div>
        </div>
        <SeeMore url="#" label="Ver más" />
      </div>
    </div>
  );
};

export default Profile;
