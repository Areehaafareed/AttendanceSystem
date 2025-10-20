import React from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

const DeviceListReport = () => {
  const data = [
    { id: 1, deviceName: "Fingerprint Scanner 1", status: "Active" },
    { id: 2, deviceName: "Card Reader 1", status: "Inactive" },
    { id: 3, deviceName: "Face Recognition 1", status: "Active" },
  ];

  const downloadPDF = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    const {  height } = page.getSize();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Title
    const title = "Device List Report";
    page.drawText(title, {
      x: 50,
      y: height - 50,
      size: 18,
      font,
      color: rgb(0.15, 0.12, 0.37),
    });

    // Table header
    let yPosition = height - 90;
    page.drawText("ID   Device Name              Status", {
      x: 50,
      y: yPosition,
      size: 12,
      font,
    });
    yPosition -= 15;

    // Table rows
    data.forEach((item) => {
      page.drawText(
        `${item.id}   ${item.deviceName.padEnd(25)} ${item.status}`,
        {
          x: 50,
          y: yPosition,
          size: 11,
          font,
          color: item.status === "Active" ? rgb(0, 0.5, 0) : rgb(1, 0, 0),
        }
      );
      yPosition -= 15;
    });

    // Save PDF
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, "device_list_report.pdf");
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-[#281f5f] mb-4">
        Device List Report
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
            <th className="border px-4 py-2">Device Name</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td className="px-4 py-2 border">{d.id}</td>
              <td className="px-4 py-2 border">{d.deviceName}</td>
              <td
                className={`px-4 py-2 border font-medium ${
                  d.status === "Active" ? "text-green-600" : "text-red-500"
                }`}
              >
                {d.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceListReport;
