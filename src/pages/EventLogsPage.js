import React, { useState, useEffect } from "react";

const EventLogPage = () => {
  const [eventLogs, setEventLogs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Base URL for your API
  const API_BASE = "http://localhost:8094/biostar/eventlogs";

  // ✅ Fetch all event logs from backend
  const fetchEventLogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE);
      if (!response.ok) throw new Error("Failed to fetch event logs");
      const data = await response.json();
      setEventLogs(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching event logs:", err);
      setError("Unable to load event logs.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventLogs();
  }, []);

  // ✅ Filter search
  const filteredEvents = eventLogs.filter(
    (e) =>
      e.user?.toLowerCase().includes(search.toLowerCase()) ||
      e.device?.toLowerCase().includes(search.toLowerCase()) ||
      e.date?.toLowerCase().includes(search.toLowerCase()) ||
      e.userGroup?.toLowerCase().includes(search.toLowerCase()) ||
      e.event?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-3">
        <h2 className="font-bold text-[#281f5f] text-lg">Event Logs</h2>
        <input
          type="text"
          placeholder="Search by user, device, or date..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded text-sm focus:outline-none focus:ring focus:ring-indigo-200"
          style={{ width: "250px" }}
        />
      </div>

      {/* Status Messages */}
      {loading && <p className="text-gray-500 text-sm">Loading event logs...</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Table */}
      {!loading && !error && (
        <div className="overflow-y-auto border rounded">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-gray-100 border-b text-left">
              <tr>
                <th className="px-4 py-2 border-r">Event ID</th>
                <th className="px-4 py-2 border-r">Date</th>
                <th className="px-4 py-2 border-r">Door</th>
                <th className="px-4 py-2 border-r">Device ID</th>
                <th className="px-4 py-2 border-r">Device</th>
                <th className="px-4 py-2 border-r">User Group</th>
                <th className="px-4 py-2 border-r">User</th>
                <th className="px-4 py-2">Event</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <tr
                    key={event.logID || index}
                    className={`border-b hover:bg-gray-50 transition ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-2">{event.logID}</td>
                    <td className="px-4 py-2">{event.date}</td>
                    <td className="px-4 py-2">{event.doorID || "-"}</td>
                    <td className="px-4 py-2">{event.deviceID}</td>
                    <td className="px-4 py-2">{event.device || "-"}</td>
                    <td className="px-4 py-2">{event.userGroup}</td>
                    <td className="px-4 py-2">{event.user}</td>
                    <td className="px-4 py-2">{event.eventType}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-500">
                    No event logs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EventLogPage;
