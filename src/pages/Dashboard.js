import React from "react";
import { FaUsers, FaCalendarCheck, FaUserTimes, FaUmbrellaBeach } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  // Dummy data for the chart
  const attendanceData = [
    { date: "Oct 1", present: 45, absent: 5 },
    { date: "Oct 2", present: 42, absent: 8 },
    { date: "Oct 3", present: 47, absent: 3 },
    { date: "Oct 4", present: 40, absent: 10 },
    { date: "Oct 5", present: 44, absent: 6 },
    { date: "Oct 6", present: 48, absent: 2 },
    { date: "Oct 7", present: 46, absent: 4 },
  ];

  // Dummy summary stats
  const totalUsers = 120;
  const presentToday = 96;
  const onLeave = 10;
  const absent = 14;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between border-l-4 border-blue-500">
          <div>
            <p className="text-sm text-gray-500">Total Users</p>
            <h3 className="text-2xl font-semibold">{totalUsers}</h3>
          </div>
          <FaUsers className="text-blue-500 text-3xl" />
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between border-l-4 border-green-500">
          <div>
            <p className="text-sm text-gray-500">Present Today</p>
            <h3 className="text-2xl font-semibold">{presentToday}</h3>
          </div>
          <FaCalendarCheck className="text-green-500 text-3xl" />
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between border-l-4 border-yellow-500">
          <div>
            <p className="text-sm text-gray-500">On Leave</p>
            <h3 className="text-2xl font-semibold">{onLeave}</h3>
          </div>
          <FaUmbrellaBeach className="text-yellow-500 text-3xl" />
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between border-l-4 border-red-500">
          <div>
            <p className="text-sm text-gray-500">Absent</p>
            <h3 className="text-2xl font-semibold">{absent}</h3>
          </div>
          <FaUserTimes className="text-red-500 text-3xl" />
        </div>
      </div>

      {/* Attendance Chart */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Weekly Attendance Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="present" stroke="#10B981" strokeWidth={3} name="Present" />
            <Line type="monotone" dataKey="absent" stroke="#EF4444" strokeWidth={3} name="Absent" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
        <table className="min-w-full text-sm border-collapse">
          <thead className="bg-gray-100 border-b text-left">
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
                  className={`px-4 py-2 font-medium ${
                    activity.status === "Present"
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
