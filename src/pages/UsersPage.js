


// import React, { useState, useEffect } from "react";
// import {
//   FaFingerprint,
//   FaUserCircle,
//   FaQrcode,
//   FaCheckCircle,
//   FaPlus,
//   FaEdit,
//   FaTrash,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const UsersPage = () => {
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState("");
//   const [formUser, setFormUser] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [isEdit, setIsEdit] = useState(false);
//   const navigate = useNavigate();

 
// useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const response = await fetch("http://localhost:8094/biostar/users");
//       if (!response.ok) {
//         throw new Error("Failed to fetch users");
//       }
//       const data = await response.json();

    
//       const mappedData = data.map((user) => ({
//         UserID: user.userID,
//         PF_Number: user.pF_Number,
//         FullName: user.fullName,
//         DepartmentID: user.departmentId,
//         Designation: user.designation,
//         CardNumber: user.cardNumber,
//         Email: user.email,
//         Group: user.group || "N/A",
//         AccessGroup: user.accessGroup || "N/A",
//         Status: user.status,
//         StartDateTime: user.startDateTime,
//         EndDateTime: user.endDateTime,
//         OperatorLevel: user.operatorLevel,
//         ShiftType: user.shiftType,
//         Fingerprint: user.fingerprint,
//         FaceTemplate: user.faceTemplate,
//         VisualFace: user.visualFace,
//         QRCode: user.qrCode,
//         LastSyncDate: user.lastSyncDate,
//       }));

//       setUsers(mappedData);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       alert("Failed to load users from server.");
//     }
//   };

//   fetchUsers();
// }, []);


//   const filteredUsers = users.filter(
//     (user) =>
//       user.FullName.toLowerCase().includes(search.toLowerCase()) ||
//       user.Email.toLowerCase().includes(search.toLowerCase()) ||
//       user.PF_Number.toString().includes(search)
//   );

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       setUsers(users.filter((u) => u.UserID !== id));
//     }
//   };

//   const handleEdit = (user) => {
//     setIsEdit(true);
//     setFormUser(user);
//     setShowForm(true);
//   };

//   const handleAdd = () => {
//     setIsEdit(false);
//     setFormUser({
//       UserID: users.length + 1,
//       PF_Number: "",
//       FullName: "",
//       DepartmentID: "",
//       Designation: "",
//       CardNumber: "",
//       Email: "",
//       Group: "",
//       AccessGroup: "",
//       Status: "Active",
//       StartDateTime: "",
//       EndDateTime: "",
//       OperatorLevel: "",
//       ShiftType: "",
//       Fingerprint: "",
//       FaceTemplate: "",
//       VisualFace: "",
//       QRCode: "",
//       LastSyncDate: "",
//     });
//     setShowForm(true);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (formUser.UserID && users.find((u) => u.UserID === formUser.UserID)) {
//       setUsers(users.map((u) => (u.UserID === formUser.UserID ? formUser : u)));
//     } else {
//       setUsers([...users, { ...formUser, UserID: users.length + 1 }]);
//     }
//     setShowForm(false);
//   };

//   return (
//     <div className="flex flex-col bg-white rounded-md shadow-md p-4">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-3 mb-3 gap-2">
//         <h1 className="font-bold text-[#281f5f] text-lg">All Users</h1>
//         <div className="flex gap-2">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border rounded px-3 py-1 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <button
//             onClick={handleAdd}
//             className="bg-[#281f5f] text-white text-sm px-3 py-1 rounded hover:bg-[#3b2fa1] flex items-center gap-1"
//           >
//             <FaPlus /> Add User
//           </button>
//         </div>
//       </div>

//       {/* User Form Modal */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96 shadow-lg max-h-[90vh] overflow-y-auto">
//             <h2 className="text-lg font-bold mb-4 text-[#281f5f]">
//               {isEdit ? "Edit User" : "Add User"}
//             </h2>
//             <form onSubmit={handleFormSubmit} className="space-y-3">
//               {Object.keys(formUser).map((field) =>
//                 field !== "UserID" ? (
//                   <input
//                     key={field}
//                     type="text"
//                     placeholder={field}
//                     value={formUser[field]}
//                     onChange={(e) =>
//                       setFormUser({ ...formUser, [field]: e.target.value })
//                     }
//                     className="border rounded px-2 py-1 w-full text-sm"
//                   />
//                 ) : null
//               )}
//               <div className="flex justify-end gap-2 mt-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   className="border border-gray-400 text-gray-600 px-3 py-1 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-[#281f5f] text-white px-3 py-1 rounded"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Table */}
//       <div className="overflow-x-auto border rounded">
//         <table className="min-w-full text-xs border-collapse">
//           <thead className="bg-gray-100 border-b text-left">
//             <tr>
//               {[
//                 "ID",
//                 "PF_Number",
//                 "FullName",
//                 "DepartmentID",
//                 "Designation",
//                 "CardNumber",
//                 "Email",
//                 "Group",
//                 "AccessGroup",
//                 "Status",
//                 "StartDateTime",
//                 "EndDateTime",
//                 "OperatorLevel",
//                 "ShiftType",
//                 "Fingerprint",
//                 "FaceTemplate",
//                 "VisualFace",
//                 "QRCode",
//                 "LastSyncDate",
//                 "Actions",
//               ].map((header) => (
//                 <th
//                   key={header}
//                   className="px-2 py-2 border-r font-semibold text-gray-700 text-center"
//                 >
//                   {header === "Fingerprint" ? (
//                     <FaFingerprint className="inline bg-gray-100 text-lg" />
//                   ) : header === "FaceTemplate" ? (
//                     <FaUserCircle className="inline bg-gray-100 text-lg" />
//                   ) : header === "VisualFace" ? (
//                     <FaCheckCircle className="inline bg-gray-100 text-lg" />
//                   ) : header === "QRCode" ? (
//                     <FaQrcode className="inline bg-gray-100 text-lg" />
//                   ) : (
//                     header
//                   )}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody>
//             {filteredUsers.map((user, index) => (
//               <tr
//                 key={user.UserID}
//                 className={`border-b hover:bg-gray-50 transition ${
//                   index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                 }`}
//               >
//                 {Object.keys(user).map((key) => (
//                   <td
//                     key={key}
//                     className={`px-2 py-1 ${
//                       key === "FullName"
//                         ? "text-[#281f5f] font-semibold cursor-pointer hover:underline"
//                         : ""
//                     }`}
//                     onClick={() =>
//                       key === "FullName" && navigate(`/user/${user.UserID}`)
//                     }
//                   >
//                     {user[key]}
//                   </td>
//                 ))}
//                 <td className="px-2 py-1 flex justify-center gap-2">
//                   <button onClick={() => handleEdit(user)}>
//                     <FaEdit className="text-blue-600 hover:text-blue-800" />
//                   </button>
//                   <button onClick={() => handleDelete(user.UserID)}>
//                     <FaTrash className="text-red-600 hover:text-red-800" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UsersPage;


import React, { useState, useEffect } from "react";
import {
  FaFingerprint,
  FaUserCircle,
  FaQrcode,
  FaCheckCircle,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:8094/biostar/users";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [formUser, setFormUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  // ✅ Fetch users from your backend API
  const fetchUsers = async () => {
    try {
      const response = await fetch(API_BASE);
      if (!response.ok) throw new Error("Failed to fetch users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Failed to load users from server.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔍 Filter users based on search input
  const filteredUsers = users.filter(
    (user) =>
      user.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase()) ||
      user.pF_Number?.toString().includes(search)
  );

  // 🗑️ Delete User
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete user");

      alert("User deleted successfully");
      fetchUsers(); // Refresh list
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete user");
    }
  };

  // ✏️ Open Edit Form
  const handleEdit = (user) => {
    setIsEdit(true);
    setFormUser(user);
    setShowForm(true);
  };

  // ➕ Add User
  const handleAdd = () => {
    setIsEdit(false);
    setFormUser({
      userID: "",
      pF_Number: "",
      fullName: "",
      designation: "",
      departmentId: "",
      cardNumber: "",
      email: "",
      group: "",
      accessGroup: "",
      status: "Active",
      startDateTime: "",
      endDateTime: "",
      operatorLevel: "",
      shiftType: "",
      fingerprint: "",
      faceTemplate: "",
      visualFace: "",
      qrCode: "",
      lastSyncDate: "",
    });
    setShowForm(true);
  };

  // 💾 Save or Update User (Real-time update)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        // ✅ PUT request to update user
        const response = await fetch(`${API_BASE}/${formUser.userID}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formUser),
        });

        if (!response.ok) throw new Error("Failed to update user");

        alert("User updated successfully");
      } else {
        // ✅ POST request to create user
        const response = await fetch(API_BASE, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formUser),
        });

        if (!response.ok) throw new Error("Failed to add user");

        alert("User added successfully");
      }

      setShowForm(false);
      fetchUsers(); // 🔁 Refresh list after update
    } catch (error) {
      console.error("Save failed:", error);
      alert("Failed to save user");
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-3 mb-3 gap-2">
        <h1 className="font-bold text-[#281f5f] text-lg">All Users</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-3 py-1 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleAdd}
            className="bg-[#281f5f] text-white text-sm px-3 py-1 rounded hover:bg-[#3b2fa1] flex items-center gap-1"
          >
            <FaPlus /> Add User
          </button>
        </div>
      </div>

      {/* User Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-bold mb-4 text-[#281f5f]">
              {isEdit ? "Edit User" : "Add User"}
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-3">
              {Object.keys(formUser).map(
                (field) =>
                  field !== "userID" && (
                    <input
                      key={field}
                      type="text"
                      placeholder={field}
                      value={formUser[field] || ""}
                      onChange={(e) =>
                        setFormUser({ ...formUser, [field]: e.target.value })
                      }
                      className="border rounded px-2 py-1 w-full text-sm"
                    />
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
                "userID",
                "pF_Number",
                "fullName",
                "departmentId",
                "designation",
                "cardNumber",
                "email",
                "group",
                "accessGroup",
                "status",
                "startDateTime",
                "endDateTime",
                "operatorLevel",
                "shiftType",
                "fingerprint",
                "faceTemplate",
                "visualFace",
                "qrCode",
                "lastSyncDate",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="px-2 py-2 border-r font-semibold text-gray-700 text-center"
                >
                  {header === "fingerprint" ? (
                    <FaFingerprint className="inline text-lg" />
                  ) : header === "faceTemplate" ? (
                    <FaUserCircle className="inline text-lg" />
                  ) : header === "visualFace" ? (
                    <FaCheckCircle className="inline text-lg" />
                  ) : header === "qrCode" ? (
                    <FaQrcode className="inline text-lg" />
                  ) : (
                    header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user.userID}
                className={`border-b hover:bg-gray-50 transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                {Object.keys(user).map((key) => (
                  <td
                    key={key}
                    className={`px-2 py-1 ${
                      key === "fullName"
                        ? "text-[#281f5f] font-semibold cursor-pointer hover:underline"
                        : ""
                    }`}
                    onClick={() =>
                      key === "fullName" && navigate(`/user/${user.userID}`)
                    }
                  >
                    {user[key]}
                  </td>
                ))}
                <td className="px-2 py-1 flex justify-center gap-2">
                  <button onClick={() => handleEdit(user)}>
                    <FaEdit className="text-blue-600 hover:text-blue-800" />
                  </button>
                  <button onClick={() => handleDelete(user.userID)}>
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

export default UsersPage;
