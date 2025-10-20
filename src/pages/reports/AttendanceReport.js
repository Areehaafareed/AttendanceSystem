import React from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

const AttendanceReport = () => {
  const data = [
    { id: 1, name: "Ameer", checkIn: "9:00 AM", checkOut: "5:00 PM", date: "2025-10-14" },
    { id: 2, name: "Sadia", checkIn: "9:15 AM", checkOut: "5:10 PM", date: "2025-10-14" },
  ];

  const downloadPDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const { height } = page.getSize();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Title
    page.drawText("Attendance Report", {
      x: 50,
      y: height - 50,
      size: 18,
      font,
      color: rgb(0.15, 0.12, 0.37),
    });

    // Table layout
    const startX = 50;
    let y = height - 90;
    const rowHeight = 20;
    const colWidths = [50, 150, 100, 100, 100]; // ID, Name, Check In, Check Out, Date

    // Draw table header
    const headers = ["ID", "Name", "Check In", "Check Out", "Date"];
    headers.forEach((text, i) => {
      page.drawRectangle({
        x: startX + colWidths.slice(0, i).reduce((a, b) => a + b, 0),
        y: y - rowHeight + 5,
        width: colWidths[i],
        height: rowHeight,
        borderColor: rgb(0, 0, 0),
        borderWidth: 1,
      });
      page.drawText(text, {
        x: startX + colWidths.slice(0, i).reduce((a, b) => a + b, 0) + 5,
        y: y - 15,
        size: 12,
        font,
        color: rgb(0, 0, 0),
      });
    });

    y -= rowHeight;

    // Draw table rows
    data.forEach((item) => {
      const row = [item.id, item.name, item.checkIn, item.checkOut, item.date];
      row.forEach((text, i) => {
        // Draw cell border
        page.drawRectangle({
          x: startX + colWidths.slice(0, i).reduce((a, b) => a + b, 0),
          y: y - rowHeight + 5,
          width: colWidths[i],
          height: rowHeight,
          borderColor: rgb(0, 0, 0),
          borderWidth: 1,
        });

        // Draw text
        page.drawText(text.toString(), {
          x: startX + colWidths.slice(0, i).reduce((a, b) => a + b, 0) + 5,
          y: y - 15,
          size: 11,
          font,
          color: rgb(0, 0, 0),
        });
      });
      y -= rowHeight;
    });

    // Save PDF
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, "attendance_report.pdf");
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-[#281f5f] mb-4">
        Attendance Report
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
