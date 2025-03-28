"use client";

import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="p-6 w-full h-36 flex items-center bg-blue-900 text-left">
      <div className="">
        <h1 className="text-3xl font-bold text-white">
          ¡Bienvenid@ {session?.user?.name?.split(" ")[0]}!
          <span
            className="inline-block"
            style={{
              animation: "wave 1s ease-in-out infinite",
              marginTop: "-0.5rem",
            }}
          >
            👋🏻
          </span>
        </h1>
        <label className="text-md font-normal text-slate-300">
          Administra la información de los doctores y sus citas.
        </label>
      </div>
    </div>
  );
};

export default Header;
