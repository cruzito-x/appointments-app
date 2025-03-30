import Image from "next/image";
import {
  CiHeart,
  CiLollipop,
  CiMedicalCross,
  CiStethoscope,
  CiWheat,
} from "react-icons/ci";
import personal from "@/assets/images/personal.webp";

const Personal = () => {
  return (
    <div className="mb-3">
      <div className="flex">
        <div className="grid grid-cols-4 gap-1 mb-3">
          <div className="block w-full p-6 bg-blue-900 hover:bg-blue-700 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
            <div className="flex items-center mb-5">
              <CiStethoscope size={21} className="text-white" />
              <h2 className="text-white text-sm font-normal ml-1">
                Med. general
              </h2>
            </div>
            <label className="text-white text-3xl font-semibold">45</label>
          </div>

          <div className="block w-full p-6 bg-blue-700 hover:bg-blue-500 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
            <div className="flex items-center mb-5">
              <CiWheat size={21} className="text-white" />
              <h2 className="text-white text-sm font-normal ml-1">
                Dermatología
              </h2>
            </div>
            <label className="text-white text-3xl font-semibold">14</label>
          </div>

          <div className="block w-full p-6 bg-blue-500 hover:bg-blue-300 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
            <div className="flex items-center mb-5">
              <CiLollipop size={21} className="text-white" />
              <h2 className="text-white text-sm font-normal ml-1">Pediatría</h2>
            </div>
            <label className="text-white text-3xl font-semibold">12</label>
          </div>

          <div className="block w-full p-6 bg-blue-300 hover:bg-blue-300 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
            <div className="flex items-center mb-5">
              <CiHeart size={21} className="text-white" />
              <h2 className="text-white text-sm font-normal ml-1">
                Cardiología
              </h2>
            </div>
            <label className="text-white text-3xl font-semibold">12</label>
          </div>

          <div className="block w-full p-6 bg-blue-900 hover:bg-blue-700 border border-slate-200 shadow-xl rounded-xl cursor-pointer">
            <div className="flex items-center mb-5">
              <CiMedicalCross size={21} className="text-white" />
              <h2 className="text-white text-sm font-normal ml-1">
                Enfermería
              </h2>
            </div>
            <label className="text-white text-3xl font-semibold">12</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
