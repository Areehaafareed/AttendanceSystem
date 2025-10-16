// import React from "react";
// import { FaUsers, FaCalendarCheck, FaUserTimes, FaUmbrellaBeach } from "react-icons/fa";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// const Dashboard = () => {
//   // Dummy data for the chart
//   const attendanceData = [
//     { date: "Oct 1", present: 45, absent: 5 },
//     { date: "Oct 2", present: 42, absent: 8 },
//     { date: "Oct 3", present: 47, absent: 3 },
//     { date: "Oct 4", present: 40, absent: 10 },
//     { date: "Oct 5", present: 44, absent: 6 },
//     { date: "Oct 6", present: 48, absent: 2 },
//     { date: "Oct 7", present: 46, absent: 4 },
//   ];

//   const statsMock = [
//   { icon: <FaUser />, label: 'User', count: 7639 },
//   { icon: <FaSmile />, label: 'Visual Face', count: 0 },
//   { icon: <FaSmile />, label: 'Face', count: 0 },
//   { icon: <FaFingerprint />, label: 'Fingerprint', count: 4505 },
//   { icon: <FaIdCard />, label: 'Card', count: 11652 },
//   { icon: <FaMobileAlt />, label: 'Device', count: '39/1000' },
//   { icon: <FaDoorOpen />, label: 'Door', count: '0/1000' },
//   { icon: <FaUsers />, label: 'Access Group', count: 0 },
// ];

//   // Dummy summary stats
//   const totalUsers = 120;
//   const presentToday = 96;
//   const onLeave = 10;
//   const absent = 14;

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between border-l-4 border-blue-500">
//           <div>
//             <p className="text-sm text-gray-500">Total Users</p>
//             <h3 className="text-2xl font-semibold">{totalUsers}</h3>
//           </div>
//           <FaUsers className="text-blue-500 text-3xl" />
//         </div>

//         <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between border-l-4 border-green-500">
//           <div>
//             <p className="text-sm text-gray-500">Present Today</p>
//             <h3 className="text-2xl font-semibold">{presentToday}</h3>
//           </div>
//           <FaCalendarCheck className="text-green-500 text-3xl" />
//         </div>

//         <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between border-l-4 border-yellow-500">
//           <div>
//             <p className="text-sm text-gray-500">On Leave</p>
//             <h3 className="text-2xl font-semibold">{onLeave}</h3>
//           </div>
//           <FaUmbrellaBeach className="text-yellow-500 text-3xl" />
//         </div>

//         <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between border-l-4 border-red-500">
//           <div>
//             <p className="text-sm text-gray-500">Absent</p>
//             <h3 className="text-2xl font-semibold">{absent}</h3>
//           </div>
//           <FaUserTimes className="text-red-500 text-3xl" />
//         </div>
//       </div>

//       <div className="row">
//   {stats.map((s, i) => (
//     <div className="col-6 col-md-3 text-center mb-3" key={i}>
//       <div
//         className="border border-danger rounded-circle p-3 text-danger mx-auto"
//         style={{ width: '60px', height: '60px' }}
//       >
//         {s.icon}
//       </div>
//       <div className="mt-2">{s.label}</div>
//       <div className="fw-bold">{s.count}</div>
//     </div>
//   ))}
// </div>


//       {/* Attendance Chart */}
//       <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//         <h3 className="text-lg font-semibold mb-4">Weekly Attendance Trend</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={attendanceData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="present" stroke="#10B981" strokeWidth={3} name="Present" />
//             <Line type="monotone" dataKey="absent" stroke="#EF4444" strokeWidth={3} name="Absent" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Recent Activity Table */}
//       <div className="bg-white rounded-xl shadow-md p-6">
//         <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
//         <table className="min-w-full text-sm border-collapse">
//           <thead className="bg-gray-100 border-b text-left">
//             <tr>
//               <th className="px-4 py-2 border-r">Date</th>
//               <th className="px-4 py-2 border-r">User</th>
//               <th className="px-4 py-2 border-r">Department</th>
//               <th className="px-4 py-2 border-r">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               { date: "2024/10/14", user: "Ameer NMC", dept: "Tech", status: "Present" },
//               { date: "2024/10/14", user: "Sadiq Ali", dept: "Operations", status: "Absent" },
//               { date: "2024/10/14", user: "Irfan Ahmed", dept: "Supervisor", status: "Leave" },
//               { date: "2024/10/14", user: "Sana Ahmed", dept: "Engineering", status: "Present" },
//             ].map((activity, i) => (
//               <tr
//                 key={i}
//                 className={`border-b ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
//               >
//                 <td className="px-4 py-2">{activity.date}</td>
//                 <td className="px-4 py-2">{activity.user}</td>
//                 <td className="px-4 py-2">{activity.dept}</td>
//                 <td
//                   className={`px-4 py-2 font-medium ${
//                     activity.status === "Present"
//                       ? "text-green-600"
//                       : activity.status === "Leave"
//                       ? "text-yellow-600"
//                       : "text-red-600"
//                   }`}
//                 >
//                   {activity.status}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   FaUser,
//   FaFingerprint,
//   FaSmile,
//   FaIdCard,
//   FaMobileAlt,
//   FaDoorOpen,
//   FaUsers,
// } from 'react-icons/fa';

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// const Dashboard = () => {
//   const [chartData, setChartData] = useState({
//   labels: [],
//   datasets: [],
// });

//   const [stats, setStats] = useState([]);

//   // Simulated API call
//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       // Chart data
//       const chartMock = {
//         labels: ['15', '16', '17', '18', '19', '20', '21'],
//         values: [0, 2, 5, 4, 3, 6, 2],
//       };

//       // Stat data
//       const statsMock = [
//         { icon: <FaUser />, label: 'User', count: 7639 },
//         { icon: <FaSmile />, label: 'Visual Face', count: 0 },
//         { icon: <FaSmile />, label: 'Face', count: 0 },
//         { icon: <FaFingerprint />, label: 'Fingerprint', count: 4505 },
//         { icon: <FaIdCard />, label: 'Card', count: 11652 },
//         { icon: <FaMobileAlt />, label: 'Device', count: '39/1000' },
//         { icon: <FaDoorOpen />, label: 'Door', count: '0/1000' },
//         { icon: <FaUsers />, label: 'Access Group', count: 0 },
//       ];

//       // Set state
//       setStats(statsMock);
//       setChartData({
//         labels: chartMock.labels,
//         datasets: [
//           {
//             label: 'Entries',
//             data: chartMock.values,
//             borderColor: '#ffffff',
//             backgroundColor: '#ffffff',
//             tension: 0.3,
//           },
//         ],
//       });
//     };

//     fetchDashboardData();
//   }, []);

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//     },
//     scales: {
//       x: { grid: { display: false }, ticks: { color: '#ffffff' } },
//       y: { grid: { color: '#ffffff55' }, ticks: { color: '#ffffff' } },
//     },
//   };

//   return (
//     <div className="container-fluid p-4">
//       <div className="bg-info p-4 rounded text-white mb-4">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <div>
//             <h4>Overview</h4>
//             <p>15 August 2024 ~ 21 August 2024</p>
//           </div>
//           <div>
//             <button className="btn btn-light btn-sm me-2">Week</button>
//             <button className="btn btn-outline-light btn-sm me-2">Month</button>
//             <button className="btn btn-outline-light btn-sm">Year</button>
//           </div>
//         </div>

//         <Line data={chartData} options={chartOptions} />

//         <div className="d-flex justify-content-end mt-3">
//           <div
//             className="bg-dark text-white text-center rounded-circle"
//             style={{ width: '60px', height: '60px', lineHeight: '60px', fontSize: '20px' }}
//           >
//             0
//             <div style={{ fontSize: '10px' }}>Total</div>
//           </div>
//         </div>
//       </div>

//       {/* Dynamic Stats */}
//       <div className="bg-white p-4 rounded shadow-sm mb-4">
//         <h5>Usage</h5>
//         <div className="row">
//           {stats.map((s, i) => (
//             <div className="col-6 col-md-3 text-center mb-3" key={i}>
//               <div className="border border-danger rounded-circle p-3 text-danger mx-auto" style={{ width: '60px', height: '60px' }}>
//                 {s.icon}
//               </div>
//               <div className="mt-2">{s.label}</div>
//               <div className="fw-bold">{s.count}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Notice Section */}
//       <div className="bg-white p-4 rounded shadow-sm mb-4">
//         <h5>Notice</h5>
//         <p className="text-danger">- What's new with BioStar 2 v2.9.6</p>
//       </div>

//       {/* Missed Alarms Section */}
//       <div className="bg-white p-4 rounded shadow-sm">
//         <h5>Missed Alarms</h5>
//         <table className="table table-bordered mt-3">
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Device</th>
//               <th>User</th>
//               <th>Alarm</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>2024/08/12 14:29:23</td>
//               <td>Labor IN 1 (10.92.14.48)</td>
//               <td>21431 (M Ayaz Khan)</td>
//               <td>Access denied (Invalid period)</td>
//             </tr>
//             <tr>
//               <td>2024/08/08 12:27:43</td>
//               <td>ICD Out (10.92.6.50)</td>
//               <td>224690 (Shahid Zia)</td>
//               <td>Access denied (Invalid period)</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import {
  FaUsers,
  FaCalendarCheck,
  FaUserTimes,
  FaUmbrellaBeach,
  FaUser,
  FaSmile,
  FaFingerprint,
  FaIdCard,
  FaMobileAlt,
  FaDoorOpen,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";

const monthlyAttendanceData = [
  { month: "Jan", present: 22, absent: 3 },
  { month: "Feb", present: 20, absent: 5 },
  { month: "Mar", present: 23, absent: 2 },
  { month: "Apr", present: 21, absent: 4 },
  { month: "May", present: 24, absent: 1 },
  { month: "Jun", present: 22, absent: 3 },
  { month: "Jul", present: 20, absent: 5 },
  { month: "Aug", present: 23, absent: 2 },
  { month: "Sep", present: 21, absent: 4 },
  { month: "Oct", present: 24, absent: 1 },
];


// Dummy summary stats
const totalUsers = 120;
const presentToday = 96;
const onLeave = 10;
const absent = 14;

// Circular progress SVG
const CircularProgress = ({ size = 60, strokeWidth = 6, progress }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="mx-auto rotate-[-90deg]">
      <circle
        stroke="#E5E7EB"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke="#281f5f" // Theme blue progress
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
    </svg>
  );
};

const usageStats = [
  { icon: <FaUser className="text-[#281f5f]" />, label: "User", count: 76, maxCount: 100, link: "/users" },
  { icon: <FaSmile className="text-[#281f5f]" />, label: "Visual Face", count: 30, maxCount: 100,  },
  { icon: <FaFingerprint className="text-[#281f5f]" />, label: "Fingerprint", count: 45, maxCount: 100,  },
  { icon: <FaIdCard className="text-[#281f5f]" />, label: "Card", count: 116, maxCount: 200,  },
  { icon: <FaMobileAlt className="text-[#281f5f]" />, label: "Device", count: 49, maxCount: 100,  },
  { icon: <FaDoorOpen className="text-[#281f5f]" />, label: "Door", count: 0, maxCount: 100, },
  { icon: <FaUsers className="text-[#281f5f]" />, label: "Access Group", count: 0, maxCount: 100,  },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6 text-[#281f5f]">
        Dashboard Overview
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Link
          to="/users"
          className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between border-l-4 border-[#281f5f] hover:bg-[#281f5f]/5 transition"
        >
          <div>
            <p className="text-sm text-gray-600">Total Users</p>
            <h3 className="text-2xl font-semibold text-[#281f5f]">
              {totalUsers}
            </h3>
          </div>
          <FaUsers className="text-[#281f5f] text-3xl" />
        </Link>

        <Link
          to="/present"
          className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between border-l-4 border-green-500 hover:bg-green-50 transition"
        >
          <div>
            <p className="text-sm text-gray-600">Present Today</p>
            <h3 className="text-2xl font-semibold text-green-600">
              {presentToday}
            </h3>
          </div>
          <FaCalendarCheck className="text-green-500 text-3xl" />
        </Link>

        <Link
          to="/leave"
          className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between border-l-4 border-yellow-500 hover:bg-yellow-50 transition"
        >
          <div>
            <p className="text-sm text-gray-600">On Leave</p>
            <h3 className="text-2xl font-semibold text-[#281f5f]">
              {onLeave}
            </h3>
          </div>
          <FaUmbrellaBeach className="text-[#281f5f] text-3xl" />
        </Link>

        <Link
          to="/absent"
          className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between border-l-4 border-red-500 hover:bg-red-50 transition"
        >
          <div>
            <p className="text-sm text-gray-600">Absent</p>
            <h3 className="text-2xl font-semibold text-red-600">{absent}</h3>
          </div>
          <FaUserTimes className="text-red-500 text-3xl" />
        </Link>
      </div>

      {/* Usage Stats */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-8 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4 text-[#281f5f]">
          Usage Stats
        </h3>
        <div className="flex space-x-6 min-w-max">
          {usageStats.map((stat, idx) => {
            const progress = Math.min(
              100,
              Math.round((stat.count / stat.maxCount) * 100)
            );
            return (
              <Link
                to={stat.link}
                key={idx}
                className="flex flex-col items-center p-2 cursor-pointer hover:shadow-md rounded transition"
                style={{ minWidth: 80 }}
              >
                <div className="relative w-16 h-16">
                  <CircularProgress progress={progress} />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#281f5f] text-3xl">
                    {stat.icon}
                  </div>
                </div>
                <div className="mt-1 text-sm font-bold text-center text-[#281f5f]">
                  {stat.label}
                </div>
                <div className="text-xs font-bold text-center text-gray-600">
                  {stat.count}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Attendance Chart */}

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4 text-[#281f5f]">
          Monthly Attendance Trend
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyAttendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="present"
              stroke="#10B981"
              strokeWidth={3}
              name="Present"
            />
            <Line
              type="monotone"
              dataKey="absent"
              stroke="#EF4444"
              strokeWidth={3}
              name="Absent"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>



      {/* Recent Activity Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-[#281f5f]">
          Recent Activities
        </h3>
        <table className="min-w-full text-sm border-collapse">
          <thead className="bg-[#281f5f]/10 border-b text-left text-[#281f5f]">
            <tr>
              <th className="px-4 py-2 border-r">Date</th>
              <th className="px-4 py-2 border-r">User</th>
              <th className="px-4 py-2 border-r">Department</th>
              <th className="px-4 py-2 border-r">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: "2024/10/14", user: "Ameer NMC", dept: "Tech", status: "Present" },
              { date: "2024/10/14", user: "Sadiq Ali", dept: "Operations", status: "Absent" },
              { date: "2024/10/14", user: "Irfan Ahmed", dept: "Supervisor", status: "Leave" },
              { date: "2024/10/14", user: "Sana Ahmed", dept: "Engineering", status: "Present" },
            ].map((activity, i) => (
              <tr
                key={i}
                className={`border-b ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="px-4 py-2">{activity.date}</td>
                <td className="px-4 py-2">{activity.user}</td>
                <td className="px-4 py-2">{activity.dept}</td>
                <td
                  className={`px-4 py-2 font-medium ${activity.status === "Present"
                    ? "text-green-600"
                    : activity.status === "Leave"
                      ? "text-yellow-600"
                      : "text-red-600"
                    }`}
                >
                  {activity.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
