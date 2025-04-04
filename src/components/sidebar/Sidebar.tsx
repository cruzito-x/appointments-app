"use client";

import { useContext, useState, createContext } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { CiMaximize1, CiMinimize1 } from "react-icons/ci";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const { data: session } = useSession();
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`h-screen bg-blue-900 text-white ${
        expanded ? "w-56" : "w-20"
      } flex flex-col transition-all duration-300`}
    >
      <div
        className={`p-5 flex ${
          expanded ? "justify-between" : "justify-center"
        } items-center`}
      >
        {expanded && <h3 className="text-lg font-semibold">sanitos sv</h3>}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-gray-300"
        >
          <div className="hover:bg-blue-500 p-3 rounded">
            {expanded ? <CiMinimize1 size={22} /> : <CiMaximize1 size={22} />}
          </div>
        </button>
      </div>
      <hr className="border-1 border-white ml-4 mr-4" />
      {expanded && <h4 className="text-white ml-7 mt-3">MENÚ</h4>}
      <SidebarContext.Provider value={{ expanded }}>
        <nav className="flex-1 p-3">
          <ul>{children}</ul>
        </nav>
      </SidebarContext.Provider>
      <hr className="border-1 border-white ml-4 mr-4" />
      <div
        className={`p-3 flex items-center ${
          expanded ? "ml-4" : "justify-center"
        }`}
      >
        <img
          className="w-10 h-10 rounded-md cursor-pointer "
          src={`https://ui-avatars.com/api/?name=${session?.user?.name}&background=3b82f6&color=ffffff&bold=true`}
          alt="User Avatar"
        />
        {expanded && (
          <div className="p-3">
            <h4 className="font-semibold">{session?.user?.name}</h4>
            <span className="text-xs text-slate-300">
              {session?.user?.email}
            </span>
          </div>
        )}
      </div>
    </aside>
  );
}

export function SidebarItem({ icon, text, link, active, onClick }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`flex items-center p-4 my-1 hover:bg-blue-500 hover:bg-opacity-30 ${
        active
          ? "bg-blue-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30"
          : ""
      } rounded cursor-pointer`}
    >
      {link ? (
        <Link href={link} className="flex items-center w-full">
          {icon}
          {expanded && <span className="ml-3">{text}</span>}
        </Link>
      ) : (
        <div onClick={onClick} className="flex items-center w-full">
          {icon}
          {expanded && <span className="ml-3">{text}</span>}
        </div>
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
    <li className="relative flex items-center py-2 px-3 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white">
      <a className="flex p-1 w-full" href={link}>
        {text}
      </a>
    </li>
  );
}
