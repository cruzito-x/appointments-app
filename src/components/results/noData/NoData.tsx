import Image from "next/image";
import empty from "@/assets/images/empty.png";

const NoData = () => {
  return (
    <div className="flex justify-center items-center">
      <Image className="w-full h-full" src={empty} alt="no data" />
    </div>
  );
};

export default NoData;
