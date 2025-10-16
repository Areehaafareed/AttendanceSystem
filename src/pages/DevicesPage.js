import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const DevicesPage = () => {
  const [devices, setDevices] = useState([]);
  const [search, setSearch] = useState("");
  const [formDevice, setFormDevice] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // ✅ 1. Fetch devices from backend (direct URL)
  const fetchDevices = async () => {
  try {
    const response = await fetch("http://localhost:8094/biostar/devices");
    if (!response.ok) throw new Error("Failed to fetch devices");
    const data = await response.json();
    setDevices(data);
  } catch (error) {
    console.error("Error fetching devices:", error);
  }
};

  useEffect(() => {
    fetchDevices();
  }, []);

  // ✅ 2. Handle delete device
  const handleDelete = async (deviceID) => {
    if (!window.confirm("Are you sure you want to delete this device?")) return;
    try {
      const response = await fetch(
        `http://localhost:8094/biostar/devices/${deviceID}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        setDevices(devices.filter((d) => d.deviceID !== deviceID));
      } else {
        alert("Failed to delete device");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  // ✅ 3. Handle edit device
  const handleEdit = (device) => {
    setIsEdit(true);
    setFormDevice(device);
    setShowForm(true);
  };

  // ✅ 4. Handle add new device
  const handleAdd = () => {
    setIsEdit(false);
    setFormDevice({
      deviceID: "",
      deviceName: "",
      deviceAddress: "",
      group: "",
      deviceType: "",
      location: "",
      status: "Active",
      productName: "",
      hardwareVersion: "",
      devicePort: "",
    });
    setShowForm(true);
  };

  // ✅ 5. Handle form submit (POST or PUT)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEdit ? "PUT" : "POST";
      const url = isEdit
        ? `http://localhost:8094/biostar/devices/${formDevice.deviceID}`
        : "http://localhost:8094/biostar/devices";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDevice),
      });

      if (!response.ok) throw new Error("Failed to save device");

      await fetchDevices(); // refresh table
      setShowForm(false);
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  // ✅ 6. Filter by search input
  const filteredDevices = devices.filter(
    (d) =>
      d.deviceName?.toLowerCase().includes(search.toLowerCase()) ||
      d.deviceAddress?.toLowerCase().includes(search.toLowerCase()) ||
      d.deviceType?.toLowerCase().includes(search.toLowerCase()) ||
      d.status?.toLowerCase().includes(search.toLowerCase())
  );

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
              {isEdit ? "Edit Device" : "Add Device"}
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
                ) : (
                  isEdit && (
                    <input
                      key="deviceID"
                      type="text"
                      placeholder="Device ID"
                      value={formDevice.deviceID}
                      readOnly
                      className="border rounded px-2 py-1 w-full text-sm bg-gray-100"
                    />
                  )
                )
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
                <td className="px-2 py-1">{d.deviceID}</td>
                <td className="px-2 py-1">{d.deviceName}</td>
                <td className="px-2 py-1">{d.deviceAddress}</td>
                <td className="px-2 py-1">{d.group}</td>
                <td className="px-2 py-1">{d.deviceType}</td>
                <td className="px-2 py-1">{d.status}</td>
                <td className="px-2 py-1">{d.devicePort}</td>
                <td className="px-2 py-1">{d.productName}</td>
                <td className="px-2 py-1">{d.location}</td>
                <td className="px-2 py-1">{d.hardwareVersion}</td>
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
