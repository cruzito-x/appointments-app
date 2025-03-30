import Image from "next/image";
import { CiStar } from "react-icons/ci";
import doctor from "@/assets/images/logo.png";
import SeeMore from "@/components/buttons/seeMore/SeeMore";

const Reviews = () => {
  return (
    <div className="mb-3 space-y-3.5">
      <div className="flex items-center">
        <div className="rounded bg-blue-500 p-3.5">
          <Image src={doctor} width={40} height={40} alt="Profile Photo" />
        </div>
        <div className="w-3/5 ml-2">
          <div className="flex mb-1">
            <h2 className="text-blue-900 text-sm font-semibold">Juan Pérez</h2>
            <CiStar className="text-yellow-600 ml-1" />
            <CiStar className="text-yellow-600" />
            <CiStar className="text-yellow-600" />
            <CiStar className="text-yellow-600" />
            <CiStar className="text-yellow-600" />
          </div>
          <div>
            <p className="text-gray-600 text-xs font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              cum dicta nemo quis temporibus?
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="rounded bg-blue-500 p-3.5">
          <Image src={doctor} width={40} height={40} alt="Profile Photo" />
        </div>
        <div className="w-3/5 ml-2">
          <div className="flex mb-1">
            <h2 className="text-blue-900 text-sm font-semibold">Juan Pérez</h2>
            <CiStar className="text-yellow-600 ml-1" />
            <CiStar className="text-yellow-600" />
            <CiStar className="text-yellow-600" />
            <CiStar className="text-yellow-600" />
            <CiStar className="text-yellow-600" />
          </div>
          <div>
            <p className="text-gray-600 text-xs font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              cum dicta nemo quis temporibus?
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="rounded bg-blue-500 p-3.5">
          <Image src={doctor} width={40} height={40} alt="Profile Photo" />
        </div>
        <div className="w-3/5 ml-2">
          <div className="flex mb-1">
            <h2 className="text-blue-900 text-sm font-semibold">Juan Pérez</h2>
            <CiStar className="text-yellow-600 ml-1" />
            <CiStar className="text-yellow-600" />
            <CiStar className="text-yellow-600" />
            <CiStar className="text-yellow-600" />
            <CiStar className="text-yellow-600" />
          </div>
          <div>
            <p className="text-gray-600 text-xs font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              cum dicta nemo quis temporibus?
            </p>
          </div>
        </div>
      </div>

      <SeeMore link="#" label="Ver más" />
    </div>
  );
};

export default Reviews;
