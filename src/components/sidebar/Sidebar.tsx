"use client";

import { useContext, useState } from "react";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";
import { createContext } from "react";
import { useSession } from "next-auth/react";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const { data: session, status } = useSession();
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-center items-center">
          <Image
            className={`overflow-hidden transtion-all duration-200 rounded-full ${
              expanded ? "w-24" : "w-0"
            }`}
            src={Logo}
            alt="Logo"
          />
          {/* <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            onClick={() => setExpanded((current) => !current)}
          >
            {expanded ? (
              <BsChevronBarRight className="text-xl" />
            ) : (
              <BsChevronBarLeft className="text-xl" />
            )}
          </button> */}
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3">
          <img
            className="w-10 h-10 rounded-md"
            src={`https://ui-avatars.com/api/?name=${session?.user?.name}&background=random&color=3730a3&bold=true`}
            alt={`${session?.user?.name} Avatar`}
          />
          <div
            className={`flex justify-between items-center overflow-hidden transtion-all ${
              expanded ? "w-32 ml-3" : "w-0"
            }`}
          >
            <div>
              <h4 className="font-semibold"> {session?.user?.name}⚕️ </h4>
              <span className="text-xs text-gray-500">
                {session?.user?.email}
              </span>
            </div>
            {/* <IoMdMore size={20} /> */}
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  link,
  alert,
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  link?: string;
  alert?: boolean;
}) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${
        active
          ? "bg-gradient-to-r from-blue-400 to-blue-200 text-blue-800"
          : "hover:bg-indigo-50 text-gray-800"
      } `}
    >
      <a className="flex p-1" href={link}>
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-32 ml-3" : "w-0 h-0"
          }`}
        >
          {text}
        </span>
      </a>
      {alert && (
        <div
          className={`absolute right-2/4 w-2 h-2 rounded bg-blue-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-blue-100 text-blue-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
