// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
// import { BiChat } from "react-icons/bi";
// import { FaBell, FaSearch, FaChevronDown, FaChevronRight } from "react-icons/fa";
// import { FaGear } from "react-icons/fa6";
// import { FiTable } from "react-icons/fi";
// import { GoGraph } from "react-icons/go";
// import { MdOutlineHeadsetMic, MdSpaceDashboard } from "react-icons/md";
// import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from "react-icons/tb";
// import { TiCalendar } from "react-icons/ti";

// import Dashboard from "./pages/Dashboard";
// import DevicesPage from "./pages/DevicesPage";
// import AttendancePage from "./pages/AttendancePage";
// import UsersPage from "./pages/UsersPage";
// import EventLogsPage from "./pages/EventLogsPage";
// import SplashScreen from "./pages/SplashScreen";
// import LoginPage from "./pages/LoginPage";
// import SignUpPage from "./pages/SignUpPage";


// const App = () => {
//   const [open, setOpen] = useState(true);
//   const [subMenus, setSubMenus] = useState({});

//   const toggleSubMenu = (menu) => {
//     setSubMenus((prev) => ({
//       ...prev,
//       [menu]: !prev[menu],
//     }));
//   };

//   const Menus = [
//     { title: "Dashboard", icon: <MdSpaceDashboard />, path: "/" },
//     { title: "Users", icon: <BiChat />, path: "/users" },
//     { title: "Devices", icon: <FiTable />, path: "/devices" },
//     { title: "Time Attendance", icon: <GoGraph />, path: "/attendance" },
//     { title: "Event Logs", icon: <TiCalendar />, path: "/eventlogs" },
//     {
//       title: "Settings",
//       icon: <FaGear />,
//       subMenu: ["General", "Security", "Notifications"],
//       key: "settings",
//     },
//   ];

//   return (
//     <Router>
//       <div className="w-full flex">
//         {/* Sidebar */}
//         <div
//           className={`${
//             open ? "w-72" : "w-20"
//           } bg-zinc-900 h-screen p-5 pt-8 relative duration-300`}
//         >
//           {/* Toggle button */}
//           <div
//             className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 bg-zinc-50 border border-zinc-50 rounded-full text-xl flex items-center justify-center transition-transform duration-300 ${
//               !open && "rotate-180"
//             }`}
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <TbLayoutSidebarLeftExpand /> : <TbLayoutSidebarLeftCollapse />}
//           </div>

//           {/* Logo */}
//           <div className="flex items-center gap-x-4 mb-6">
//             <img
//               src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png"
//               alt="logo"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <h1
//               className={`text-zinc-50 font-semibold text-xl whitespace-nowrap transition-all duration-300 ${
//                 !open && "opacity-0"
//               }`}
//             >
//               Admin Panel
//             </h1>
//           </div>

//           {/* Menu */}
//           <ul className="space-y-1">
//             {Menus.map((Menu, index) => (
//               <li key={index}>
//                 {Menu.path ? (
//                   <Link
//                     to={Menu.path}
//                     className={`flex items-center gap-x-4 p-3 rounded-md hover:bg-zinc-800 text-zinc-50 transition-all ${
//                       index === 0 && "bg-zinc-800/40"
//                     }`}
//                   >
//                     <div className="flex-shrink-0 text-lg">{Menu.icon}</div>
//                     <span
//                       className={`text-sm font-medium transition-all duration-300 ${
//                         !open && "hidden"
//                       }`}
//                     >
//                       {Menu.title}
//                     </span>
//                   </Link>
//                 ) : (
//                   <div
//                     className="flex items-center justify-between p-3 rounded-md text-zinc-50 hover:bg-zinc-800 cursor-pointer"
//                     onClick={() => toggleSubMenu(Menu.key)}
//                   >
//                     <div className="flex items-center gap-x-4">
//                       <span className="text-lg">{Menu.icon}</span>
//                       <span className={`${!open && "hidden"}`}>{Menu.title}</span>
//                     </div>
//                     {open && (
//                       subMenus[Menu.key] ? <FaChevronDown /> : <FaChevronRight />
//                     )}
//                   </div>
//                 )}

//                 {/* Submenu */}
//                 {Menu.subMenu && subMenus[Menu.key] && (
//                   <ul
//                     className={`pl-10 text-zinc-300 text-sm transition-all duration-300 ${
//                       !open && "hidden"
//                     }`}
//                   >
//                     {Menu.subMenu.map((subItem, idx) => (
//                       <li key={idx} className="py-2 hover:text-white">
//                         {subItem}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 bg-zinc-100 min-h-screen">
//           {/* Navbar */}
//           <div className="w-full h-[8ch] px-12 bg-zinc-50 shadow-md flex items-center justify-between">
//             <div className="w-96 border border-zinc-300 rounded-full h-11 flex items-center">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="flex-1 px-4 outline-none bg-zinc-50"
//               />
//               <button className="px-4 border-l border-zinc-300 text-zinc-600">
//                 <FaSearch />
//               </button>
//             </div>
//             <div className="flex items-center gap-x-6">
//               <FaBell className="text-xl" />
//               <img
//                 src="https://cdn.pixabay.com/photo/2016/11/21/11/17/model-1844729_640.jpg"
//                 alt="profile"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Page Routes */}
//           <div className="p-8">
//             <Routes>
                 
//               <Route path="/" element={<SplashScreen />} />
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/signup" element={<SignUpPage />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/users" element={<UsersPage />} />
//               <Route path="/devices" element={<DevicesPage />} />
//               <Route path="/attendance" element={<AttendancePage />} />
//               <Route path="/eventlogs" element={<EventLogsPage />} />

         
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SplashScreen from "./pages/SplashScreen";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import DevicesPage from "./pages/DevicesPage";
import AttendancePage from "./pages/AttendancePage";
import EventLogsPage from "./pages/EventLogsPage";

function Layout() {
  const location = useLocation();
  const hideSidebarRoutes = ["/", "/login", "/signup"];

  const hideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex w-full">
      {!hideSidebar && <Sidebar />}

      <div className="flex-1 bg-zinc-100 min-h-screen">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/eventlogs" element={<EventLogsPage />} />
        </Routes>
      </div>
    </div>
  );
}

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
