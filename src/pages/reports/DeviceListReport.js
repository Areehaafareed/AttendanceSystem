import React from "react";

const DeviceListReport = () => {
  const data = [
    { id: 1, deviceName: "Fingerprint Scanner 1", status: "Active" },
    { id: 2, deviceName: "Card Reader 1", status: "Inactive" },
    { id: 3, deviceName: "Face Recognition 1", status: "Active" },
  ];

  const downloadCSV = () => {
    const csvRows = [
      ["ID", "Device Name", "Status"],
      ...data.map((d) => [d.id, d.deviceName, d.status]),
    ];
    const csvContent = csvRows.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "device_list_report.csv";
    link.click();
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-[#281f5f] mb-4">Device List Report</h2>
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
