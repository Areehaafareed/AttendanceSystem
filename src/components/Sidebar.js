// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BiChat } from "react-icons/bi";
// import { FaChevronDown, FaChevronRight } from "react-icons/fa";
// import { FaGears } from "react-icons/fa6";
// import { FiTable } from "react-icons/fi";
// import { GoGraph } from "react-icons/go";
// import { MdSpaceDashboard } from "react-icons/md";
// import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";
// import { TiCalendar } from "react-icons/ti";

// const Sidebar = () => {
//   const [open, setOpen] = useState(true);
//   const [subMenus, setSubMenus] = useState({});

//   const toggleSubMenu = (menu) => {
//     setSubMenus((prev) => ({
//       ...prev,
//       [menu]: !prev[menu],
//     }));
//   };

//   const Menus = [
//     { title: "Dashboard", icon: <MdSpaceDashboard />, path: "/dashboard" },
//     { title: "Users", icon: <BiChat />, path: "/users" },
//     { title: "Devices", icon: <FiTable />, path: "/devices" },
//     { title: "Time Attendance", icon: <GoGraph />, path: "/attendance" },
//     { title: "Event Logs", icon: <TiCalendar />, path: "/eventlogs" },
//     {
//       title: "Settings",
//       icon: <FaGears />,
//       subMenu: ["General", "Security", "Notifications"],
//       key: "settings",
//     },
//   ];

//   return (
//     <div
//       className={`${
//         open ? "w-72 p-5" : "w-20 p-4"
//       } bg-zinc-900 h-screen pt-8 relative duration-300`}
//     >
//       {/* Toggle button */}
//       <div
//         className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 bg-zinc-50 border-zinc-50 border-2 rounded-full text-xl flex items-center justify-center ${
//           !open && "rotate-180"
//         } transition-all`}
//         onClick={() => setOpen(!open)}
//       >
//         {open ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapse />}
//       </div>

//       {/* Logo */}
//       <div className="flex gap-x-4 items-center">
//         <img
//           src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png"
//           alt="logo"
//           className="w-10 h-10 rounded-full object-cover"
//         />
//         <h1
//           className={`text-zinc-50 font-semibold text-xl ${!open && "hidden"}`}
//         >
//           Admin Panel
//         </h1>
//       </div>

//       {/* Menu */}
//       <ul className="pt-6">
//         {Menus.map((Menu, index) => (
//           <li key={index}>
//             {Menu.path ? (
//               <Link
//                 to={Menu.path}
//                 className={`flex items-center gap-x-4 p-3 rounded-md hover:bg-zinc-800 text-zinc-50 transition-all ${
//                   index === 0 && "bg-zinc-800/40"
//                 }`}
//               >
//                 <span className="text-lg">{Menu.icon}</span>
//                 <span className={`${!open && "hidden"}`}>{Menu.title}</span>
//               </Link>
//             ) : (
//               <div
//                 className="flex items-center justify-between p-3 rounded-md text-zinc-50 hover:bg-zinc-800 cursor-pointer"
//                 onClick={() => toggleSubMenu(Menu.key)}
//               >
//                 <div className="flex items-center gap-x-4">
//                   <span className="text-lg">{Menu.icon}</span>
//                   <span className={`${!open && "hidden"}`}>{Menu.title}</span>
//                 </div>
//                 {open &&
//                   (subMenus[Menu.key] ? <FaChevronDown /> : <FaChevronRight />)}
//               </div>
//             )}

//             {/* Submenu */}
//             {Menu.subMenu && subMenus[Menu.key] && (
//               <ul className="pl-10 text-zinc-300">
//                 {Menu.subMenu.map((subItem, idx) => (
//                   <li key={idx} className="py-2 hover:text-white">
//                     {subItem}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChat } from "react-icons/bi";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { FiTable } from "react-icons/fi";
import { GoGraph } from "react-icons/go";
import { MdSpaceDashboard } from "react-icons/md";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import { TiCalendar } from "react-icons/ti";

const Sidebar = ({ open, setSidebarOpen }) => {

  const [subMenus, setSubMenus] = useState({});

  const toggleSubMenu = (menu) => {
    setSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const Menus = [
    { title: "Dashboard", icon: <MdSpaceDashboard />, path: "/dashboard" },
    { title: "Users", icon: <BiChat />, path: "/users" },
    { title: "Devices", icon: <FiTable />, path: "/devices" },
    { title: "Time Attendance", icon: <GoGraph />, path: "/attendance" },
    { title: "Event Logs", icon: <TiCalendar />, path: "/eventlogs" },
    {
      title: "Settings",
      icon: <FaGears />,
      subMenu: ["General", "Security", "Notifications"],
      key: "settings",
    },
  ];

  return (
    <div
      className={`${open ? "w-72 p-5" : "w-24 p-4"
        } bg-zinc-900 h-screen flex flex-col justify-between fixed top-0 left-0 duration-300`}
    >
      {/* === TOP SECTION === */}
      <div>
        
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-8 h-8 bg-zinc-50 border-zinc-50 border-2 rounded-full text-xl flex items-center justify-center ${!open && "rotate-180"
            } transition-all`}
          onClick={() => setSidebarOpen(!open)}
        >
          {open ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapse />}
        </div>

        {/* Logo Section */}
        {/* <div
          className={`flex flex-col items-center ${open ? "mb-8" : "mb-4"
            } transition-all`}
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png"
            alt="logo"
            className="w-12 h-12 rounded-full object-cover mb-2"
          />
          {open && (
            <h1 className="text-zinc-50 font-semibold text-xl text-center">
              Admin Panel
            </h1>
          )}
        </div> */}

         {/* Logo */}
//       <div className="flex gap-x-4 items-center">
//         <img
          src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png"
          alt="logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h1
          className={`text-zinc-50 font-semibold gap-x-4 text-xl ${!open && "hidden"}`}
        >
          Admin Panel
        </h1>
      </div>

        {/* Menu Items */}
        <ul
          className={`space-y-1 ${open ? "" : "flex flex-col items-center space-y-6 mt-6"
            }`}
        >
          {Menus.map((Menu, index) => (
            <li key={index} className="w-full">
              {Menu.path ? (
                <Link
                  to={Menu.path}
                  className={`flex items-center ${open ? "gap-x-4 p-3" : "justify-center p-3"
                    } rounded-md hover:bg-zinc-800 text-zinc-50 transition-all ${index === 0 && "bg-zinc-800/40"
                    }`}
                >
                  <span className="text-lg flex-shrink-0">{Menu.icon}</span>
                  {open && <span className="truncate">{Menu.title}</span>}
                </Link>
              ) : (
                <div
                  className={`flex items-center justify-between ${open ? "p-3" : "p-3 justify-center"
                    } rounded-md text-zinc-50 hover:bg-zinc-800 cursor-pointer`}
                  onClick={() => toggleSubMenu(Menu.key)}
                >
                  <div
                    className={`flex items-center ${open ? "gap-x-4" : "justify-center"
                      }`}
                  >
                    <span className="text-lg flex-shrink-0">{Menu.icon}</span>
                    {open && <span>{Menu.title}</span>}
                  </div>
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
                    <li key={idx} className="py-2 hover:text-white">
                      {subItem}
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
