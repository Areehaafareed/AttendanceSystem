import React, { useState, useEffect } from "react";

const DevicesPage = () => {
  const [devices, setDevices] = useState([]);
  const [search, setSearch] = useState("");

  // Simulate fetching data (dummy API)
 useEffect(() => {
    const dummyDevices = [
      {
        deviceID: 1,
        deviceName: "Fingerprint Scanner 1",
        deviceAddress: "192.168.1.10",
        group: "Entrance",
        deviceType: "Fingerprint",
        status: "Active",
        devicePort: 51211,
        productName: "BioStar 2",
        location: "Main Gate",
        hardwareVersion: "v2.3.1",
      },
      {
        deviceID: 2,
        deviceName: "Card Reader 1",
        deviceAddress: "192.168.1.11",
        group: "Exit",
        deviceType: "Card",
        status: "Active",
        devicePort: 51212,
        productName: "BioStar 2",
        location: "Back Gate",
        hardwareVersion: "v2.3.1",
      },
      {
        deviceID: 3,
        deviceName: "Face Recognition 1",
        deviceAddress: "192.168.1.12",
        group: "Entrance",
        deviceType: "Face",
        status: "Inactive",
        devicePort: 51213,
        productName: "BioStar 2",
        location: "Side Gate",
        hardwareVersion: "v2.3.0",
      },
      {
        deviceID: 4,
        deviceName: "Fingerprint Scanner 2",
        deviceAddress: "192.168.1.13",
        group: "Admin Block",
        deviceType: "Fingerprint",
        status: "Active",
        devicePort: 51214,
        productName: "Suprema BioLite N2",
        location: "Admin Lobby",
        hardwareVersion: "v2.4.1",
      },
      {
        deviceID: 5,
        deviceName: "Card Reader 2",
        deviceAddress: "192.168.1.14",
        group: "Warehouse",
        deviceType: "Card",
        status: "Inactive",
        devicePort: 51215,
        productName: "BioStar 2",
        location: "Warehouse Exit",
        hardwareVersion: "v2.2.8",
      },
      {
        deviceID: 6,
        deviceName: "Face Recognition 2",
        deviceAddress: "192.168.1.15",
        group: "Lobby",
        deviceType: "Face",
        status: "Active",
        devicePort: 51216,
        productName: "Suprema FaceLite",
        location: "Reception Area",
        hardwareVersion: "v2.5.0",
      },
      {
        deviceID: 7,
        deviceName: "Fingerprint Scanner 3",
        deviceAddress: "192.168.1.16",
        group: "Security",
        deviceType: "Fingerprint",
        status: "Active",
        devicePort: 51217,
        productName: "BioStar 2",
        location: "Security Room",
        hardwareVersion: "v2.4.2",
      },
      {
        deviceID: 8,
        deviceName: "Card Reader 3",
        deviceAddress: "192.168.1.17",
        group: "Parking",
        deviceType: "Card",
        status: "Inactive",
        devicePort: 51218,
        productName: "BioEntry P2",
        location: "Parking Entry",
        hardwareVersion: "v2.3.5",
      },
      {
        deviceID: 9,
        deviceName: "Face Recognition 3",
        deviceAddress: "192.168.1.18",
        group: "Main Office",
        deviceType: "Face",
        status: "Active",
        devicePort: 51219,
        productName: "FaceStation F2",
        location: "Main Office Entrance",
        hardwareVersion: "v2.5.3",
      },
      {
        deviceID: 10,
        deviceName: "Card Reader 4",
        deviceAddress: "192.168.1.19",
        group: "Server Room",
        deviceType: "Card",
        status: "Active",
        devicePort: 51220,
        productName: "BioEntry R2",
        location: "Server Room Door",
        hardwareVersion: "v2.4.0",
      },
    ];
    setDevices(dummyDevices);
  }, []);

  // Filter devices by search
  const filteredDevices = devices.filter(
    (d) =>
      d.deviceName.toLowerCase().includes(search.toLowerCase()) ||
      d.deviceAddress.toLowerCase().includes(search.toLowerCase()) ||
      d.deviceType.toLowerCase().includes(search.toLowerCase()) ||
      d.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-3">
        <h2 className="font-semibold text-lg">Devices</h2>
        <input
          type="text"
          placeholder="Search devices..."
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
              <th className="px-4 py-2 border-r">Device ID</th>
              <th className="px-4 py-2 border-r">Device Name</th>
              <th className="px-4 py-2 border-r">Address</th>
              <th className="px-4 py-2 border-r">Group</th>
              <th className="px-4 py-2 border-r">Device Type</th>
              <th className="px-4 py-2 border-r">Status</th>
              <th className="px-4 py-2 border-r">Port</th>
              <th className="px-4 py-2 border-r">Product Name</th>
              <th className="px-4 py-2 border-r">Location</th>
              <th className="px-4 py-2">Hardware Version</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.map((d) => (
              <tr
                key={d.deviceID}
                className={`border-b hover:bg-gray-50 transition ${
                  d.deviceID % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2">{d.deviceID}</td>
                <td className="px-4 py-2">{d.deviceName}</td>
                <td className="px-4 py-2">{d.deviceAddress}</td>
                <td className="px-4 py-2">{d.group}</td>
                <td className="px-4 py-2">{d.deviceType}</td>
                <td
                  className={`px-4 py-2 font-medium ${
                    d.status === "Active" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {d.status}
                </td>
                <td className="px-4 py-2">{d.devicePort}</td>
                <td className="px-4 py-2">{d.productName}</td>
                <td className="px-4 py-2">{d.location}</td>
                <td className="px-4 py-2">{d.hardwareVersion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DevicesPage;
