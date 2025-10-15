import React from "react";

const EventLogsReport = () => {
  const data = [
    { id: 1, user: "Ameer", event: "Door Opened", date: "2025-10-14" },
    { id: 2, user: "Sadia", event: "Access Denied", date: "2025-10-14" },
  ];

  const downloadCSV = () => {
    const csvRows = [
      ["ID", "User", "Event", "Date"],
      ...data.map((d) => [d.id, d.user, d.event, d.date]),
    ];
    const csvContent = csvRows.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "event_logs_report.csv";
    link.click();
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-[#281f5f] mb-4">Event Logs Report</h2>
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
            <th className="border px-4 py-2">User</th>
            <th className="border px-4 py-2">Event</th>
            <th className="border px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id} className="border">
              <td className="px-4 py-2">{d.id}</td>
              <td className="px-4 py-2">{d.user}</td>
              <td className="px-4 py-2">{d.event}</td>
              <td className="px-4 py-2">{d.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventLogsReport;
