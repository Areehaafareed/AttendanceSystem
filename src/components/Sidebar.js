import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiChat } from "react-icons/bi";
import { FaChevronDown, FaChevronRight, FaFileAlt } from "react-icons/fa";
import { FiTable } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { MdSpaceDashboard } from "react-icons/md";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import { TiCalendar } from "react-icons/ti";
import logo from "../assets/dp-removebg.png";

const Sidebar = ({ open, setSidebarOpen }) => {
  const [subMenus, setSubMenus] = useState({});
  const location = useLocation();

  const toggleSubMenu = (menuKey) => {
    setSubMenus((prev) => (prev[menuKey] ? {} : { [menuKey]: true }));
  };

  const Menus = [
    { title: "Dashboard", icon: <MdSpaceDashboard />, path: "/dashboard" },
    { title: "Users", icon: <BiChat />, path: "/users" },
    { title: "Devices", icon: <FiTable />, path: "/devices" },
    { title: "Time Attendance", icon: <GoGraph />, path: "/attendance" },
    { title: "Event Logs", icon: <TiCalendar />, path: "/eventlogs" },
    {
      title: "Reports",
      icon: <FaFileAlt />,
      subMenu: [
        { name: "Event Logs", path: "/reports/eventlogs" },
        { name: "Attendance", path: "/reports/attendance" },
        { name: "Device List", path: "/reports/devicelist" },
      ],
      key: "reports",
    },
  ];

  return (
    <div
      className={`${open ? "w-72" : "w-24"
        } bg-[#281f5f] h-screen flex flex-col justify-between fixed top-0 left-0 duration-300`}
    >
      {/* === TOP SECTION === */}
      <div>
        {/* Sidebar toggle button */}
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-8 h-8 bg-zinc-50 border-zinc-50 border-2 rounded-full text-xl flex items-center justify-center ${!open && "rotate-180"
            } transition-all`}
          onClick={() => setSidebarOpen(!open)}
        >
          {open ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapse />}
        </div>

        {/* Logo */}
        <div className="flex gap-x-4 items-center mt-3 ml-2">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 rounded-full object-cover"
          />
          <h1
            className={`text-zinc-50 font-semibold text-xl mt-4 ${!open && "hidden"}`}
          >
            Admin Panel
          </h1>
        </div>

        {/* === Menu Items === */}
        <ul className={`${open ? "" : "flex flex-col mt-6"}`}>
          {Menus.map((Menu, index) => (
            <li key={index} className="w-full">
              {/* Regular Menu Links */}
              {Menu.path ? (
                <Link
                  to={Menu.path}
                  className={`flex items-center ${open ? "gap-x-4 p-3" : "justify-center p-3"
                    } rounded-md text-zinc-50 transition-all ${location.pathname === Menu.path
                      ? "bg-zinc-800/40"
                      : "hover:bg-[#140766]"
                    }`}
                >
                  <span className="text-lg flex-shrink-0">{Menu.icon}</span>
                  {open && <span className="truncate">{Menu.title}</span>}
                </Link>
              ) : (
                // ✅ Fixed alignment for submenu parent (like Reports)
                <div
                  className={`flex items-center ${open ? "justify-between p-3" : "justify-center p-3"
                    } rounded-md text-zinc-50 hover:bg-zinc-800 cursor-pointer`}
                  onClick={() => toggleSubMenu(Menu.key)}
                >
                  <div
                    className={`flex items-center ${open ? "gap-x-4" : "justify-center"
                      }`}
                  >
                    <span className="text-lg flex-shrink-0">{Menu.icon}</span>
                    {open && (
                      <span
                        className={`${Menu.title === "Reports"
                          ? "underline decoration-white underline-offset-4"
                          : ""
                          }`}
                      >
                        {Menu.title}
                      </span>
                    )}
                  </div>
                  {/* Only show chevron when open */}
                  {open &&
                    (subMenus[Menu.key] ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    ))}
                </div>
              )}

              {/* Submenu */}
              {Menu.subMenu && subMenus[Menu.key] && open && (
                <ul className="pl-10 text-zinc-300">
                  {Menu.subMenu.map((subItem, idx) => (
                    <li key={idx} className="py-2">
                      <Link
                        to={subItem.path}
                        className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === subItem.path
                          ? "bg-zinc-800/40 text-white"
                          : "text-zinc-300 hover:bg-[#140766] hover:text-white"
                          }`}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
