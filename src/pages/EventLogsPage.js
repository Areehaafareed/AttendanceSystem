import React, { useState } from "react";

const eventData = [
  {
    eventId: 1,
    date: "2024/08/21 14:44:01",
    door: "-",
    deviceId: "544190479",
    device: "Contractor 3 Out 544190479 (10.92.14.95)",
    userGroup: "Contractor",
    user: "21734 (Ameer NMC)",
    event: "1:1 authentication succeeded (Card + Finger)",
  },
  {
    eventId: 2,
    date: "2024/08/21 14:43:58",
    door: "-",
    deviceId: "544190484",
    device: "Contractor 1 Out 544190484 (10.92.14.85)",
    userGroup: "Contractor",
    user: "21734 (Ameer NMC)",
    event: "1:1 authentication succeeded (Card + Finger)",
  },
  {
    eventId: 3,
    date: "2024/08/21 14:43:56",
    door: "-",
    deviceId: "218191",
    device: "Contractor 2 IN 218191 (10.92.14.78)",
    userGroup: "Contractor",
    user: "218191 (Allan Bux NMC)",
    event: "1:1 authentication succeeded (Card + Finger)",
  },
  {
    eventId: 4,
    date: "2024/08/21 14:43:51",
    door: "-",
    deviceId: "217979",
    device: "Contractor 2 IN 217979 (10.92.14.79)",
    userGroup: "Contractor",
    user: "217979 (Mashooq Ali NMC)",
    event: "1:1 authentication succeeded (Card + Finger)",
  },
  {
    eventId: 5,
    date: "2024/08/21 14:39:19",
    door: "-",
    deviceId: "544190485",
    device: "Contractor 3 IN 544190485 (10.92.14.97)",
    userGroup: "Contractor",
    user: "216883 (Irfan Ahmed NMC)",
    event: "1:1 authentication succeeded (Card + Finger)",
  },
  {
    eventId: 6,
    date: "2024/08/21 14:38:42",
    door: "-",
    deviceId: "216891",
    device: "Contractor 2 IN 216891 (10.92.14.70)",
    userGroup: "Contractor",
    user: "216891 (Wee Masayo NMC)",
    event: "1:1 authentication succeeded (Card + Finger)",
  },
  {
    eventId: 7,
    date: "2024/08/21 14:38:16",
    door: "-",
    deviceId: "217959",
    device: "Contractor 1 IN 217959 (10.92.14.66)",
    userGroup: "Contractor",
    user: "217959 (Sadiq Ali NMC)",
    event: "1:1 authentication succeeded (Card + Finger)",
  },
  {
    eventId: 8,
    date: "2024/08/21 14:38:09",
    door: "-",
    deviceId: "217989",
    device: "Contractor 3 IN 217989 (10.92.14.64)",
    userGroup: "Contractor",
    user: "217989 (Ilam Din NMC)",
    event: "1:1 authentication succeeded (Card + Finger)",
  },
  {
    eventId: 9,
    date: "2024/08/21 14:37:03",
    door: "QICT Block IN",
    deviceId: "217553",
    device: "QICT Block IN 217553 (10.92.14.82)",
    userGroup: "QICT Block",
    user: "217553 (Biya Ahmed NMC)",
    event: "1:1 authentication succeeded (Card + Finger)",
  },
  {
    eventId: 10,
    date: "2024/08/21 14:36:55",
    door: "QICT Block OUT",
    deviceId: "217554",
    device: "QICT Block OUT 217554 (10.92.14.83)",
    userGroup: "QICT Block",
    user: "217554 (Rafiq Khan NMC)",
    event: "1:1 authentication succeeded (Card + Finger)",
  },
];

const EventLogPage = () => {
  const [search, setSearch] = useState("");

  // Filter data based on search (by user, device, or date)
  const filteredEvents = eventData.filter(
    (e) =>
      e.user.toLowerCase().includes(search.toLowerCase()) ||
      e.device.toLowerCase().includes(search.toLowerCase()) ||
      e.date.toLowerCase().includes(search.toLowerCase()) ||
      e.userGroup.toLowerCase().includes(search.toLowerCase()) ||
      e.event.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-4">
      {/* Header with Search */}
      <div className="flex justify-between items-center border-b pb-3 mb-3">
        <h2 className="font-semibold text-lg">Event Log</h2>
        <input
          type="text"
          placeholder="Search by user, device, or date..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded text-sm focus:outline-none focus:ring focus:ring-indigo-200"
          style={{ width: "250px" }}
        />
      </div>

      {/* Table */}
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
            {filteredEvents.map((event) => (
              <tr
                key={event.eventId}
                className={`border-b hover:bg-gray-50 transition ${
                  event.eventId % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2">{event.eventId}</td>
                <td className="px-4 py-2">{event.date}</td>
                <td className="px-4 py-2">{event.door}</td>
                <td className="px-4 py-2">{event.deviceId}</td>
                <td className="px-4 py-2">{event.device}</td>
                <td className="px-4 py-2">{event.userGroup}</td>
                <td className="px-4 py-2">{event.user}</td>
                <td className="px-4 py-2">{event.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventLogPage;
