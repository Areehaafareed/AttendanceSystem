import React from "react";

const AttendanceReport = () => {
  const data = [
    { id: 1, name: "Ameer", checkIn: "9:00 AM", checkOut: "5:00 PM", date: "2025-10-14" },
    { id: 2, name: "Sadia", checkIn: "9:15 AM", checkOut: "5:10 PM", date: "2025-10-14" },
  ];

  const downloadCSV = () => {
    const csvRows = [
      ["ID", "Name", "Check In", "Check Out", "Date"],
      ...data.map((d) => [d.id, d.name, d.checkIn, d.checkOut, d.date]),
    ];
    const csvContent = csvRows.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "attendance_report.csv";
    link.click();
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-[#281f5f] mb-4">Attendance Report</h2>
      <button
        onClick={downloadCSV}
        className="bg-[#281f5f] text-white px-4 py-2 rounded-md hover:bg-[#3a2d8f]"
      >
        Download CSV
      </button>
      <table className="mt-4 w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Check In</th>
            <th className="border px-4 py-2">Check Out</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td className="px-4 py-2 border">{d.id}</td>
              <td className="px-4 py-2 border">{d.name}</td>
              <td className="px-4 py-2 border">{d.checkIn}</td>
              <td className="px-4 py-2 border">{d.checkOut}</td>
              <td className="px-4 py-2 border">{d.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceReport;
