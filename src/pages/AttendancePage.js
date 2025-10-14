import React, { useState, useEffect } from "react";

function AttendancePage() {
  const [attendance, setAttendance] = useState([]);
  const [search, setSearch] = useState("");

  // Simulate fetching dummy data
  useEffect(() => {
    const dummyAttendance = [
      { attendanceID: 1, userID: 1, date: "2025-10-13", checkInTime: "08:00:00", checkOutTime: "17:00:00", status: "Present", totalHours: 9 },
      { attendanceID: 2, userID: 2, date: "2025-10-13", checkInTime: "09:00:00", checkOutTime: "17:30:00", status: "Present", totalHours: 8.5 },
      { attendanceID: 3, userID: 3, date: "2025-10-13", checkInTime: "08:30:00", checkOutTime: "16:45:00", status: "Present", totalHours: 8.25 },
      // Add more records if needed
    ];
    setAttendance(dummyAttendance);
  }, []);

  // Filter by userID or date
  const filteredAttendance = attendance.filter(
    (a) =>
      a.userID.toString().includes(search) ||
      a.date.includes(search)
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Time Attendance</h2>
        <input
          type="text"
          className="form-control"
          style={{ width: "250px" }}
          placeholder="Search attendance..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-success">
            <tr>
              <th>AttendanceID</th>
              <th>UserID</th>
              <th>Date</th>
              <th>CheckInTime</th>
              <th>CheckOutTime</th>
              <th>Status</th>
              <th>TotalHours</th>
            </tr>
          </thead>
          <tbody>
            {filteredAttendance.map((a) => (
              <tr key={a.attendanceID}>
                <td>{a.attendanceID}</td>
                <td>{a.userID}</td>
                <td>{a.date}</td>
                <td>{a.checkInTime}</td>
                <td>{a.checkOutTime}</td>
                <td>{a.status}</td>
                <td>{a.totalHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendancePage;
