import React, { useState, useEffect } from "react";

const AttendancePage = () => {
  const [attendance, setAttendance] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const dummyAttendance = [
      {
        AttendanceID: 1,
        PF_Number: 101,
        Date: "2025-10-13",
        CheckInTime: "08:00:00",
        CheckOutTime: "17:00:00",
        TotalHours: 9.0,
        Status: "Present",
      },
      {
        AttendanceID: 2,
        PF_Number: 102,
        Date: "2025-10-13",
        CheckInTime: "09:15:00",
        CheckOutTime: "17:30:00",
        TotalHours: 8.25,
        Status: "Present",
      },
      {
        AttendanceID: 3,
        PF_Number: 103,
        Date: "2025-10-13",
        CheckInTime: "08:30:00",
        CheckOutTime: "15:45:00",
        TotalHours: 7.25,
        Status: "Half Day",
      },
      {
        AttendanceID: 4,
        PF_Number: 104,
        Date: "2025-10-13",
        CheckInTime: null,
        CheckOutTime: null,
        TotalHours: 0,
        Status: "Absent",
      },
      {
        AttendanceID: 5,
        PF_Number: 105,
        Date: "2025-10-13",
        CheckInTime: "07:55:00",
        CheckOutTime: "16:10:00",
        TotalHours: 8.25,
        Status: "Present",
      },
      {
        AttendanceID: 6,
        PF_Number: 1006,
        Date: "2025-10-14",
        CheckInTime: "09:15:00",
        CheckOutTime: "18:00:00",
        TotalHours: 8.25,
        Status: "Late",
      },
      {
        AttendanceID: 7,
        PF_Number: 1007,
        Date: "2025-10-14",
        CheckInTime: "08:05:00",
        CheckOutTime: "16:50:00",
        TotalHours: 8.75,
        Status: "Present",
      },
      {
        AttendanceID: 8,
        PF_Number: 1008,
        Date: "2025-10-14",
        CheckInTime: "08:10:00",
        CheckOutTime: "17:10:00",
        TotalHours: 9,
        Status: "Present",
      },
      {
        AttendanceID: 9,
        PF_Number: 1009,
        Date: "2025-10-14",
        CheckInTime: "08:45:00",
        CheckOutTime: "17:00:00",
        TotalHours: 8.25,
        Status: "Late",
      },
      {
        AttendanceID: 10,
        PF_Number: 1010,
        Date: "2025-10-14",
        CheckInTime: "—",
        CheckOutTime: "—",
        TotalHours: 0,
        Status: "Absent",
      },
    ];
    setAttendance(dummyAttendance);
  }, []);

  const filteredAttendance = attendance.filter(
    (a) =>
      (a.PF_Number &&
        a.PF_Number.toString().toLowerCase().includes(search.toLowerCase())) ||
      (a.Date && a.Date.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-3">
        <h2 className="font-semibold text-lg">Time Attendance</h2>
        <input
          type="text"
          placeholder="Search by PF Number or Date..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded text-sm focus:outline-none focus:ring focus:ring-indigo-200"
        />
      </div>

      {/* Table */}
      <div className="overflow-y-auto border rounded">
        <table className="min-w-full text-sm border-collapse">
          <thead className="bg-gray-100 border-b text-left">
            <tr>
              <th className="px-4 py-2 border-r">Attendance ID</th>
              <th className="px-4 py-2 border-r">PF Number</th>
              <th className="px-4 py-2 border-r">Date</th>
              <th className="px-4 py-2 border-r">Check In Time</th>
              <th className="px-4 py-2 border-r">Check Out Time</th>
              <th className="px-4 py-2 border-r">Total Hours</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttendance.map((a, index) => (
              <tr
                key={a.AttendanceID}
                className={`border-b hover:bg-gray-50 transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2">{a.AttendanceID}</td>
                <td className="px-4 py-2">{a.PF_Number}</td>
                <td className="px-4 py-2">{a.Date}</td>
                <td className="px-4 py-2">{a.CheckInTime || "-"}</td>
                <td className="px-4 py-2">{a.CheckOutTime || "-"}</td>
                <td className="px-4 py-2">{a.TotalHours}</td>
                <td
                  className={`px-4 py-2 font-medium ${
                    a.Status === "Present"
                      ? "text-green-600"
                      : a.Status === "Absent"
                      ? "text-red-500"
                      : a.Status === "Late"
                      ? "text-yellow-500"
                      : "text-orange-500"
                  }`}
                >
                  {a.Status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePage;
