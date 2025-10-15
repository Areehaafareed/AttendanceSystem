
import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const DevicesPage = () => {
  const [devices, setDevices] = useState([]);
  const [search, setSearch] = useState("");
  const [formDevice, setFormDevice] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Simulated data fetch
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

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this device?")) {
      setDevices(devices.filter((d) => d.deviceID !== id));
    }
  };

  // Handle edit
  const handleEdit = (device) => {
    setFormDevice(device);
    setShowForm(true);
  };

  // Handle add new
  const handleAdd = () => {
    setFormDevice({
      deviceID: devices.length + 1,
      deviceName: "",
      deviceAddress: "",
      group: "",
      deviceType: "",
      status: "Active",
      devicePort: "",
      productName: "",
      location: "",
      hardwareVersion: "",
    });
    setShowForm(true);
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formDevice.deviceID && devices.find((d) => d.deviceID === formDevice.deviceID)) {
      // Edit existing
      setDevices(devices.map((d) => (d.deviceID === formDevice.deviceID ? formDevice : d)));
    } else {
      // Add new
      setDevices([...devices, { ...formDevice, deviceID: devices.length + 1 }]);
    }
    setShowForm(false);
  };

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-3 mb-3 gap-2">
        <h2 className="font-bold text-[#281f5f] text-lg">Devices</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search devices..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-3 py-1 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleAdd}
            className="bg-[#281f5f] text-white text-sm px-3 py-1 rounded hover:bg-[#3b2fa1] flex items-center gap-1"
          >
            <FaPlus /> Add Device
          </button>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-bold mb-4 text-[#281f5f]">
              {formDevice.deviceID ? "Edit Device" : "Add Device"}
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-3">
              {Object.keys(formDevice).map((field) =>
                field !== "deviceID" ? (
                  <input
                    key={field}
                    type="text"
                    placeholder={field}
                    value={formDevice[field]}
                    onChange={(e) =>
                      setFormDevice({ ...formDevice, [field]: e.target.value })
                    }
                    className="border rounded px-2 py-1 w-full text-sm"
                  />
                ) : null
              )}
              <div className="flex justify-end gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="border border-gray-400 text-gray-600 px-3 py-1 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#281f5f] text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-xs border-collapse">
          <thead className="bg-gray-100 border-b text-left">
            <tr>
              {[
                "Device ID",
                "Device Name",
                "Address",
                "Group",
                "Device Type",
                "Status",
                "Port",
                "Product Name",
                "Location",
                "Hardware Version",
                "Actions",
              ].map((header) => (
                <th key={header} className="px-2 py-2 border-r font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredDevices.map((d, index) => (
              <tr
                key={d.deviceID}
                className={`border-b hover:bg-gray-50 transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                {Object.keys(d).map((key) => (
                  <td key={key} className="px-2 py-1">
                    {d[key]}
                  </td>
                ))}
                <td className="px-2 py-1 flex justify-center gap-2">
                  <button onClick={() => handleEdit(d)}>
                    <FaEdit className="text-blue-600 hover:text-blue-800" />
                  </button>
                  <button onClick={() => handleDelete(d.deviceID)}>
                    <FaTrash className="text-red-600 hover:text-red-800" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DevicesPage;
