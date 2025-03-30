import Image from "next/image";
import doctor from "@/assets/images/logo.png";
import {
  CiHeart,
  CiLollipop,
  CiMedal,
  CiMoneyBill,
  CiUser,
  CiWheat,
} from "react-icons/ci";
import SeeMore from "@/components/buttons/seeMore/SeeMore";
import { useEffect, useState } from "react";

const Profile = () => {
  const [personal, setPersonal] = useState<
    { id: number; userId: number; specialties: string[] }[]
  >([]);

  const getPersonal = async () => {
    const response = await fetch("/api/personal", {
      method: "GET",
    });
    const personalData = await response.json();

    setPersonal(personalData);

    return personal;
  };

  useEffect(() => {
    getPersonal();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-12">
      {personal.map((person, index) => (
        <div
          key={index}
          className="block w-72 p-6 bg-white border shadow-lg rounded-xl cursor-pointer"
        >
          <div className="flex items-center justify-center">
            <div className="rounded w-2/5 bg-blue-500 p-3.5">
              <Image src={doctor} width={80} height={80} alt="Profile Photo" />
            </div>
            <div className="w-3/5 ml-2">
              <div className="flex mb-1">
                <h2 className="text-blue-900 text-sm font-semibold">
                  Dr. {person.name}
                </h2>
              </div>
              <div className="flex items-center mb-1">
                {person.specialties.map((specialty) => {
                  if (specialty === "Pediatría") {
                    return (
                      <div className="rounded bg-pink-200 p-0.5">
                        <CiLollipop size={15} className="text-pink-500" />
                      </div>
                    );
                  } else if (specialty === "Cardiología") {
                    return (
                      <div className="rounded bg-red-200 p-0.5">
                        <CiHeart size={15} className="text-red-500" />
                      </div>
                    );
                  } else if (specialty === "Dermatología") {
                    return (
                      <div className="rounded bg-yellow-200 p-0.5">
                        <CiWheat size={15} className="text-yellow-500" />
                      </div>
                    );
                  }
                })}
                <label className="text-black text-xs font-medium ml-1">
                  {person.specialties}
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <CiMoneyBill size={18} className="text-green-500 my-2" />
            <span className="text-gray-600 text-xs m-1">
              Precio de consulta:
              <label className="text-gray-600 text-xs"> $3 </label>
            </span>
          </div>
          <div className="flex justify-center space-x-2">
            <div className="rounded p-3 bg-slate-300 hover:bg-slate-200 flex items-center transition-all duration-300">
              <CiMedal size={22} className="text-gray-500" />
              <div className="text-gray-500 ml-1.5">
                <span className="text-sm font-bold">
                  {person.years_experience} años <br />
                  <label className="text-xs font-normal">Experiencia</label>
                </span>
              </div>
            </div>
            <div className="rounded p-3 bg-slate-300 hover:bg-slate-200 flex items-center transition-all duration-300">
              <CiUser size={22} className="text-gray-500" />
              <div className="text-gray-500 ml-1.5">
                <span className="text-sm font-bold">
                  {person.patients_helped} <br />
                  <label className="text-xs font-normal">Pacientes</label>
                </span>
              </div>
            </div>
          </div>
          <div className="items-start">
            <SeeMore link="#" label="Ver detalles" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
