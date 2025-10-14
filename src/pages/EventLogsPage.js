import React, { useState, useEffect } from "react";

function EventLogsPage() {
  const [eventLogs, setEventLogs] = useState([]);
  const [search, setSearch] = useState("");

  // Simulate fetching dummy data
  useEffect(() => {
    const dummyLogs = [
      { logID: 1, deviceID: 1, doorID: 101, userID: 1, date: "2025-10-13", eventType: "CheckIn", timeStamp: "08:00:00" },
      { logID: 2, deviceID: 2, doorID: 102, userID: 2, date: "2025-10-13", eventType: "CheckOut", timeStamp: "17:00:00" },
      { logID: 3, deviceID: 3, doorID: 103, userID: 3, date: "2025-10-13", eventType: "CheckIn", timeStamp: "09:15:00" },
      // Add more logs if needed
    ];
    setEventLogs(dummyLogs);
  }, []);

  // Filter by search (userID or eventType)
  const filteredLogs = eventLogs.filter(
    (l) =>
      l.userID.toString().includes(search) ||
      l.eventType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Event Logs</h2>
        <input
          type="text"
          className="form-control"
          style={{ width: "250px" }}
          placeholder="Search logs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-warning">
            <tr>
              <th>LogID</th>
              <th>DeviceID</th>
              <th>DoorID</th>
              <th>UserID</th>
              <th>Date</th>
              <th>EventType</th>
              <th>TimeStamp</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((l) => (
              <tr key={l.logID}>
                <td>{l.logID}</td>
                <td>{l.deviceID}</td>
                <td>{l.doorID}</td>
                <td>{l.userID}</td>
                <td>{l.date}</td>
                <td>{l.eventType}</td>
                <td>{l.timeStamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventLogsPage;
