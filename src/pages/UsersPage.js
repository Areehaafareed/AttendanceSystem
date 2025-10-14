// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function UsersPage() {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then(res => setUsers(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   // Filter users based on search input
//   const filteredUsers = users.filter(
//     (u) =>
//       u.name.toLowerCase().includes(search.toLowerCase()) ||
//       u.username.toLowerCase().includes(search.toLowerCase()) ||
//       u.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="container mt-4">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h2>All Users (Dummy API)</h2>
//         <input
//           type="text"
//           className="form-control"
//           style={{ width: "250px" }}
//           placeholder="Search by name, username, or email..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <table className="table table-bordered table-hover mt-3">
//         <thead className="table-primary">
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Username</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.map((u) => (
//             <tr key={u.id}>
//               <td>{u.id}</td>
//               <td>{u.name}</td>
//               <td>{u.username}</td>
//               <td>{u.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UsersPage;


import React, { useState } from "react";
import { FaFingerprint, FaUserCircle, FaQrcode, FaCheckCircle } from "react-icons/fa";

const userData = [
  {
    UserID: 1,
    PF_Number: 21734,
    FullName: "Ameer NMC",
    DepartmentID: 101,
    Designation: "Technician",
    CardNumber: "CN-1023",
    Email: "ameer.nmc@example.com",
    Group: "Contractor",
    AccessGroup: "Gate Access",
    Status: "Active",
    StartDateTime: "2024/01/05 09:00:00",
    EndDateTime: "2024/12/31 17:00:00",
    OperatorLevel: "Level 2",
    ShiftType: "Morning",
    Fingerprint: 1,
    FaceTemplate: 1,
    VisualFace: 1,
    QRCode: 1,
    LastSyncDate: "2024/08/21 14:40:00",
  },
  {
    UserID: 2,
    PF_Number: 21735,
    FullName: "Irfan Ahmed NMC",
    DepartmentID: 102,
    Designation: "Supervisor",
    CardNumber: "CN-2045",
    Email: "irfan.ahmed@example.com",
    Group: "QICT Block",
    AccessGroup: "Building Entry",
    Status: "Inactive",
    StartDateTime: "2024/02/10 08:30:00",
    EndDateTime: "2024/12/15 17:30:00",
    OperatorLevel: "Level 3",
    ShiftType: "Evening",
    Fingerprint: 1,
    FaceTemplate: 1,
    VisualFace: 0,
    QRCode: 0,
    LastSyncDate: "2024/08/21 14:38:00",
  },
  {
    UserID: 3,
    PF_Number: 21736,
    FullName: "Sadiq Ali NMC",
    DepartmentID: 103,
    Designation: "Operator",
    CardNumber: "CN-3002",
    Email: "sadiq.ali@example.com",
    Group: "Contractor",
    AccessGroup: "Gate Access",
    Status: "Active",
    StartDateTime: "2024/03/15 09:00:00",
    EndDateTime: "2024/12/31 17:00:00",
    OperatorLevel: "Level 1",
    ShiftType: "Night",
    Fingerprint: 1,
    FaceTemplate: 0,
    VisualFace: 1,
    QRCode: 1,
    LastSyncDate: "2024/08/21 14:36:00",
  },
  {
    UserID: 4,
    PF_Number: 21737,
    FullName: "Ilam Din NMC",
    DepartmentID: 104,
    Designation: "Engineer",
    CardNumber: "CN-3050",
    Email: "ilam.din@example.com",
    Group: "Contractor",
    AccessGroup: "Gate Access",
    Status: "Active",
    StartDateTime: "2024/04/10 09:30:00",
    EndDateTime: "2024/12/31 17:00:00",
    OperatorLevel: "Level 2",
    ShiftType: "Morning",
    Fingerprint: 1,
    FaceTemplate: 1,
    VisualFace: 1,
    QRCode: 0,
    LastSyncDate: "2024/08/21 14:35:00",
  },
  {
    UserID: 5,
    PF_Number: 21738,
    FullName: "Wee Masayo NMC",
    DepartmentID: 105,
    Designation: "Operator",
    CardNumber: "CN-3102",
    Email: "wee.masayo@example.com",
    Group: "QICT Block",
    AccessGroup: "Building Entry",
    Status: "Inactive",
    StartDateTime: "2024/05/12 08:00:00",
    EndDateTime: "2024/12/31 16:30:00",
    OperatorLevel: "Level 1",
    ShiftType: "Evening",
    Fingerprint: 0,
    FaceTemplate: 0,
    VisualFace: 1,
    QRCode: 1,
    LastSyncDate: "2024/08/21 14:34:00",
  },
  {
  UserID: 6,
  PF_Number: 21739,
  FullName: "Mashooq Ali NMC",
  DepartmentID: 106,
  Designation: "Technician",
  CardNumber: "CN-3201",
  Email: "mashooq.ali@example.com",
  Group: "Contractor",
  AccessGroup: "Gate Access",
  Status: "Active",
  StartDateTime: "2024/06/01 09:00:00",
  EndDateTime: "2024/12/31 17:00:00",
  OperatorLevel: "Level 2",
  ShiftType: "Morning",
  Fingerprint: 1,
  FaceTemplate: 1,
  VisualFace: 0,
  QRCode: 1,
  LastSyncDate: "2024/08/21 14:33:00",
},
{
  UserID: 7,
  PF_Number: 21740,
  FullName: "Allan Bux NMC",
  DepartmentID: 107,
  Designation: "Operator",
  CardNumber: "CN-3250",
  Email: "allan.bux@example.com",
  Group: "Contractor",
  AccessGroup: "Gate Access",
  Status: "Inactive",
  StartDateTime: "2024/07/12 08:30:00",
  EndDateTime: "2024/12/31 16:30:00",
  OperatorLevel: "Level 1",
  ShiftType: "Evening",
  Fingerprint: 0,
  FaceTemplate: 1,
  VisualFace: 1,
  QRCode: 0,
  LastSyncDate: "2024/08/21 14:32:00",
},
{
  UserID: 8,
  PF_Number: 21741,
  FullName: "Rafiq Khan NMC",
  DepartmentID: 108,
  Designation: "Supervisor",
  CardNumber: "CN-3301",
  Email: "rafiq.khan@example.com",
  Group: "QICT Block",
  AccessGroup: "Building Entry",
  Status: "Active",
  StartDateTime: "2024/08/10 09:00:00",
  EndDateTime: "2024/12/31 17:00:00",
  OperatorLevel: "Level 3",
  ShiftType: "Morning",
  Fingerprint: 1,
  FaceTemplate: 1,
  VisualFace: 1,
  QRCode: 1,
  LastSyncDate: "2024/08/21 14:31:00",
},
{
  UserID: 9,
  PF_Number: 21742,
  FullName: "Biya Ahmed NMC",
  DepartmentID: 109,
  Designation: "Operator",
  CardNumber: "CN-3350",
  Email: "biya.ahmed@example.com",
  Group: "QICT Block",
  AccessGroup: "Building Entry",
  Status: "Inactive",
  StartDateTime: "2024/09/01 08:00:00",
  EndDateTime: "2024/12/31 16:30:00",
  OperatorLevel: "Level 1",
  ShiftType: "Evening",
  Fingerprint: 0,
  FaceTemplate: 0,
  VisualFace: 1,
  QRCode: 1,
  LastSyncDate: "2024/08/21 14:30:00",
},
{
  UserID: 10,
  PF_Number: 21743,
  FullName: "Sana Ahmed NMC",
  DepartmentID: 110,
  Designation: "Engineer",
  CardNumber: "CN-3401",
  Email: "sana.ahmed@example.com",
  Group: "Contractor",
  AccessGroup: "Gate Access",
  Status: "Active",
  StartDateTime: "2024/10/05 09:30:00",
  EndDateTime: "2024/12/31 17:00:00",
  OperatorLevel: "Level 2",
  ShiftType: "Morning",
  Fingerprint: 1,
  FaceTemplate: 1,
  VisualFace: 1,
  QRCode: 0,
  LastSyncDate: "2024/08/21 14:29:00",
},

];

const UsersPage = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = userData.filter(
    (user) =>
      user.FullName.toLowerCase().includes(search.toLowerCase()) ||
      user.Email.toLowerCase().includes(search.toLowerCase()) ||
      user.PF_Number.toString().includes(search)
  );

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-4">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-3 mb-3 gap-2">
        <h2 className="font-semibold text-lg"> All Users</h2>
        <input
          type="text"
          placeholder="Search by Name, Email, or PF Number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-1 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm border-collapse">
          <thead className="bg-gray-100 border-b text-left">
            <tr>
              <th className="px-2 py-1 border-r">ID</th>
              <th className="px-2 py-1 border-r">PF#</th>
              <th className="px-2 py-1 border-r">Name</th>
              <th className="px-2 py-1 border-r">Dept</th>
              <th className="px-2 py-1 border-r">Designation</th>
              <th className="px-2 py-1 border-r">Card</th>
              <th className="px-2 py-1 border-r">Email</th>
              <th className="px-2 py-1 border-r">Group</th>
              <th className="px-2 py-1 border-r">Access</th>
              <th className="px-2 py-1 border-r">Status</th>
              <th className="px-2 py-1 border-r">Start</th>
              <th className="px-2 py-1 border-r">End</th>
              <th className="px-2 py-1 border-r">Level</th>
              <th className="px-2 py-1 border-r">Shift</th>
              {/* Icons in header only */}
              <th className="px-2 py-1 border-r text-center">
                <FaFingerprint className="mx-auto" title="Fingerprint" />
              </th>
              <th className="px-2 py-1 border-r text-center">
                <FaUserCircle className="mx-auto" title="Face Template" />
              </th>
              <th className="px-2 py-1 border-r text-center">
                <FaCheckCircle className="mx-auto" title="Visual Face" />
              </th>
              <th className="px-2 py-1 border-r text-center">
                <FaQrcode className="mx-auto" title="QR Code" />
              </th>
              <th className="px-2 py-1">Last Sync</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user.UserID}
                className={`border-b hover:bg-gray-50 transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-2 py-1">{user.UserID}</td>
                <td className="px-2 py-1">{user.PF_Number}</td>
                <td className="px-2 py-1">{user.FullName}</td>
                <td className="px-2 py-1">{user.DepartmentID}</td>
                <td className="px-2 py-1">{user.Designation}</td>
                <td className="px-2 py-1">{user.CardNumber}</td>
                <td className="px-2 py-1">{user.Email}</td>
                <td className="px-2 py-1">{user.Group}</td>
                <td className="px-2 py-1">{user.AccessGroup}</td>
                <td className="px-2 py-1">{user.Status}</td>
                <td className="px-2 py-1">{user.StartDateTime}</td>
                <td className="px-2 py-1">{user.EndDateTime}</td>
                <td className="px-2 py-1">{user.OperatorLevel}</td>
                <td className="px-2 py-1">{user.ShiftType}</td>

                {/* Show integer data */}
                <td className="px-2 py-1 text-center">{user.Fingerprint}</td>
                <td className="px-2 py-1 text-center">{user.FaceTemplate}</td>
                <td className="px-2 py-1 text-center">{user.VisualFace}</td>
                <td className="px-2 py-1 text-center">{user.QRCode}</td>

                <td className="px-2 py-1">{user.LastSyncDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
