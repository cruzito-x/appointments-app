"use client";

import { useContext, useState } from "react";
import { createContext } from "react";
import { useSession } from "next-auth/react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const { data: session, status } = useSession();
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-blue-500 shadow-sm transtion-all duration-300">
        <div className="p-4 pb-2 flex justify-center items-center">
          {/* <img
            className={`overflow-hidden my-3 ${expanded ? "w-32" : "w-0"}`}
            src="https://img.logoipsum.com/297.svg"
            alt="Logo"
          /> */}
          <h3 className="text-white text-md font-semibold py-3">sanitos sv</h3>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1">{children}</ul>
        </SidebarContext.Provider>
        <div className="bg-blue-950 flex p-3">
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
              <h4 className="font-semibold text-white">
                {session?.user?.name}⚕️
              </h4>
              <span className="text-xs text-slate-300">
                {session?.user?.email}
              </span>
            </div>
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
  children,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  link?: string;
  alert?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  const { expanded } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={`relative flex flex-col items-start py-2 px-3 my-1 rounded-md cursor-pointer transition-colors ${
        active
          ? "bg-gradient-to-r from-blue-400 to-blue-200"
          : "hover:bg-blue-50 text-white hover:text-blue-600"
      } `}
      onClick={onClick}
    >
      <div className="flex items-center w-full">
        {link ? (
          <a className="flex p-1 w-full" href={link}>
            {icon}
            <span
              className={`overflow-hidden transition-all font-normal ${
                expanded ? "w-32 ml-3" : "w-0 h-0"
              }`}
            >
              {text}
            </span>
          </a>
        ) : (
          <div className="flex p-1 w-full">
            {icon}
            <span
              className={`overflow-hidden transition-all font-normal ${
                expanded ? "w-32 ml-3" : "w-0 h-0"
              }`}
            >
              {text}
            </span>
          </div>
        )}
      </div>
      {isOpen && children}
      {alert && (
        <div
          className={`absolute right-2/4 w-2 h-2 rounded bg-blue-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}
    </li>
  );
}

export function SidebarSubmenu({ children }: { children: React.ReactNode }) {
  return <ul className="pl-8 mt-2 space-y-2">{children}</ul>;
}

export function SidebarSubmenuItem({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <li className="relative flex items-center py-2 px-3 rounded-md cursor-pointer hover:bg-blue-100 hover:text-blue-600">
      <a className="flex p-1 w-full" href={link}>
        {text}
      </a>
    </li>
  );
}
