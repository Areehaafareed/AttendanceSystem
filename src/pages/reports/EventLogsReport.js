import React from "react";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const doc = new jsPDF();
autoTable(doc, { head: [["Name", "Email"]], body: [["Areeha", "areeha@example.com"]] });
doc.save("example.pdf");


const EventLogsReport = () => {
  const data = [
    { id: 1, user: "Ameer", event: "Door Opened", date: "2025-10-14" },
    { id: 2, user: "Sadia", event: "Access Denied", date: "2025-10-14" },
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("Event Logs Report", 14, 20);

    // Table
    const tableColumn = ["ID", "User", "Event", "Date"];
    const tableRows = data.map((item) => [
      item.id,
      item.user,
      item.event,
      item.date,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    // Save the PDF
    doc.save("event_logs_report.pdf");
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-[#281f5f] mb-4">
        Event Logs Report
      </h2>

      <button
        onClick={downloadPDF}
        className="bg-[#281f5f] text-white px-4 py-2 rounded-md hover:bg-[#3a2d8f]"
      >
        Download PDF
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
