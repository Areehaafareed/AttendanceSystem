// import React from "react";
// import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
// import { saveAs } from "file-saver";
// import { useEventLogs } from "../../api/useEventLogs.js";

// const EventLogsReport = () => {
//   const { eventLogs, loading, error } = useEventLogs(
//     "http://localhost:8094/biostar/eventlogs"
//   );

//   const downloadPDF = async () => {
//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage();
//     const { height } = page.getSize();
//     const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

//     const title = "Event Logs Report";
//     page.drawText(title, {
//       x: 50,
//       y: height - 50,
//       size: 18,
//       font,
//       color: rgb(0.15, 0.12, 0.37),
//     });

//     let y = height - 90;
//     page.drawText("LogID   UserID   EventType   Timestamp", {
//       x: 50,
//       y,
//       size: 12,
//       font,
//     });
//     y -= 15;

//     eventLogs.forEach((log) => {
//       if (y < 60) {  // new page when space ends
//         const newPage = pdfDoc.addPage();
//         y = newPage.getSize().height - 50;
//       }
//       page.drawText(
//         `${log.logID}   ${log.userID}   ${log.eventType}   ${log.timestamp}`,
//         { x: 50, y, size: 10, font }
//       );
//       y -= 12;
//     });

//     const pdfBytes = await pdfDoc.save();
//     const blob = new Blob([pdfBytes], { type: "application/pdf" });
//     saveAs(blob, "event_logs_report.pdf");
//   };

//   return (
//     <div className="p-6 bg-white rounded-md shadow-md">
//       <h2 className="text-xl font-semibold text-[#281f5f] mb-4">
//         Event Logs Report
//       </h2>

//       {loading ? (
//         <p>Loading event logs...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <>
//           <button
//             onClick={downloadPDF}
//             className="bg-[#281f5f] text-white px-4 py-2 rounded-md hover:bg-[#3a2d8f]"
//           >
//             Download PDF
//           </button>

//           <table className="mt-4 w-full text-sm border">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-4 py-2">Log ID</th>
//                 <th className="border px-4 py-2">User ID</th>
//                 <th className="border px-4 py-2">Event Type</th>
//                 <th className="border px-4 py-2">Timestamp</th>
//               </tr>
//             </thead>
//             <tbody>
//               {eventLogs.map((log) => (
//                 <tr key={log.logID}>
//                   <td className="border px-4 py-2">{log.logID}</td>
//                   <td className="border px-4 py-2">{log.userID}</td>
//                   <td className="border px-4 py-2">{log.eventType}</td>
//                   <td className="border px-4 py-2">{log.timestamp}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   );
// };

// export default EventLogsReport;


import React from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { saveAs } from "file-saver";
import { useEventLogs } from "../../api/useEventLogs.js";

const EventLogsReport = () => {
  const { eventLogs, loading, error } = useEventLogs(
    "http://localhost:8094/biostar/eventlogs"
  );

  const downloadPDF = async () => {
    try {
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      let page = pdfDoc.addPage();
      const { width, height } = page.getSize();

      const title = "Event Logs Report";
      page.drawText(title, {
        x: 50,
        y: height - 50,
        size: 18,
        font,
        color: rgb(0.15, 0.12, 0.37),
      });

      // 🟣 Table setup
      const headers = ["Log ID", "User ID", "Device ID", "Event Type", "Timestamp"];
      const colWidths = [60, 70, 80, 150, 150]; // Adjusted widths
      const startX = 50;
      let y = height - 90;
      const rowHeight = 20;

      // Header background
      page.drawRectangle({
        x: startX - 2,
        y: y - 5,
        width: colWidths.reduce((a, b) => a + b, 0) + 4,
        height: rowHeight,
        color: rgb(0.85, 0.85, 0.95),
      });

      // Header text
      let x = startX;
      headers.forEach((header, i) => {
        page.drawText(header, {
          x: x + 5,
          y: y + 2,
          size: 11,
          font,
          color: rgb(0, 0, 0),
        });
        x += colWidths[i];
      });
      y -= rowHeight + 5;

      // 🟣 Table rows
      eventLogs.forEach((log) => {
        if (y < 60) {
          // New page when space runs out
          page = pdfDoc.addPage();
          y = height - 50;
        }

        const rowData = [
          String(log.logID ?? "-"),
          String(log.userID ?? "-"),
          String(log.deviceID ?? "-"),
          String(log.eventType ?? "-"),
          String(log.timestamp ?? "-"),
        ];

        let cellX = startX;
        rowData.forEach((cell, i) => {
          // Cell border
          page.drawRectangle({
            x: cellX - 2,
            y: y - 2,
            width: colWidths[i],
            height: rowHeight,
            borderColor: rgb(0.7, 0.7, 0.7),
            borderWidth: 0.5,
          });

          // Cell text
          page.drawText(cell, {
            x: cellX + 5,
            y: y + 5,
            size: 10,
            font,
            color: rgb(0, 0, 0),
          });

          cellX += colWidths[i];
        });

        y -= rowHeight;
      });

      // Save & download
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      saveAs(blob, "event_logs_report.pdf");
    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-[#281f5f] mb-4">
        Event Logs Report
      </h2>

      {loading ? (
        <p>Loading event logs...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <button
            onClick={downloadPDF}
            className="bg-[#281f5f] text-white px-4 py-2 rounded-md hover:bg-[#3a2d8f]"
          >
            Download PDF
          </button>

          <table className="mt-4 w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Log ID</th>
                <th className="border px-4 py-2">User ID</th>
                <th className="border px-4 py-2">Device ID</th>
                <th className="border px-4 py-2">Event Type</th>
                <th className="border px-4 py-2">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {eventLogs.map((log) => (
                <tr key={log.logID}>
                  <td className="border px-4 py-2">{log.logID}</td>
                  <td className="border px-4 py-2">{log.userID}</td>
                  <td className="border px-4 py-2">{log.deviceID}</td>
                  <td className="border px-4 py-2">{log.eventType}</td>
                  <td className="border px-4 py-2">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default EventLogsReport;
