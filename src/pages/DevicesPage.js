import React, { useState, useEffect } from "react";

function DevicesPage() {
  const [devices, setDevices] = useState([]);
  const [search, setSearch] = useState("");

  // Simulate fetching data (dummy API)
  useEffect(() => {
    const dummyDevices = [
      {
        deviceID: 1,
        deviceName: "Fingerprint Scanner 1",
        address: "192.168.1.10",
        group: "Entrance",
        deviceType: "Fingerprint",
        status: "Active",
        port: 51211,
        productName: "BioStar 2",
        location: "Main Gate",
        version: "v2.3.1",
      },
      {
        deviceID: 2,
        deviceName: "Card Reader 1",
        address: "192.168.1.11",
        group: "Exit",
        deviceType: "Card",
        status: "Active",
        port: 51212,
        productName: "BioStar 2",
        location: "Back Gate",
        version: "v2.3.1",
      },
      {
        deviceID: 3,
        deviceName: "Face Recognition 1",
        address: "192.168.1.12",
        group: "Entrance",
        deviceType: "Face",
        status: "Inactive",
        port: 51213,
        productName: "BioStar 2",
        location: "Side Gate",
        version: "v2.3.0",
      },
      // Add more devices if needed
    ];
    setDevices(dummyDevices);
  }, []);

  // Filter devices by search
  const filteredDevices = devices.filter(
    (d) =>
      d.deviceName.toLowerCase().includes(search.toLowerCase()) ||
      d.address.toLowerCase().includes(search.toLowerCase()) ||
      d.deviceType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Devices</h2>
        <input
          type="text"
          className="form-control"
          style={{ width: "250px" }}
          placeholder="Search devices..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-info">
            <tr>
              <th>DeviceID</th>
              <th>Device Name</th>
              <th>Address</th>
              <th>Group</th>
              <th>Device Type</th>
              <th>Status</th>
              <th>Port</th>
              <th>Product Name</th>
              <th>Location</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.map((d) => (
              <tr key={d.deviceID}>
                <td>{d.deviceID}</td>
                <td>{d.deviceName}</td>
                <td>{d.address}</td>
                <td>{d.group}</td>
                <td>{d.deviceType}</td>
                <td>{d.status}</td>
                <td>{d.port}</td>
                <td>{d.productName}</td>
                <td>{d.location}</td>
                <td>{d.version}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DevicesPage;
