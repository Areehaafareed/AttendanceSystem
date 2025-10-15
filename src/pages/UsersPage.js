
// import React, { useState } from "react";
// import { FaFingerprint, FaUserCircle, FaQrcode, FaCheckCircle, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import userDataJson from "../data/mockUserData.js"; // move your current data into a new file for clarity

// const UsersPage = () => {
//   const [users, setUsers] = useState(userDataJson);
//   const [search, setSearch] = useState("");
//   const [formUser, setFormUser] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const navigate = useNavigate();

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
//     setFormUser(user);
//     setShowForm(true);
//   };

//   const handleAdd = () => {
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
//           <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
//             <h2 className="text-lg font-bold mb-4 text-[#281f5f]">{formUser.UserID ? "Edit User" : "Add User"}</h2>
//             <form onSubmit={handleFormSubmit} className="space-y-3">
//               {["FullName", "PF_Number", "Email", "Designation", "DepartmentID", "CardNumber"].map((field) => (
//                 <input
//                   key={field}
//                   type="text"
//                   placeholder={field}
//                   value={formUser[field]}
//                   onChange={(e) => setFormUser({ ...formUser, [field]: e.target.value })}
//                   className="border rounded px-2 py-1 w-full text-sm"
//                 />
//               ))}
//               <div className="flex justify-end gap-2 mt-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowForm(false)}
//                   className="border border-gray-400 text-gray-600 px-3 py-1 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="bg-[#281f5f] text-white px-3 py-1 rounded">
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Table */}
//       <div className="overflow-x-auto border rounded">
//         <table className="min-w-full text-sm border-collapse">
//           <thead className="bg-gray-100 border-b text-left">
//             <tr>
//               <th className="px-2 py-1 border-r">ID</th>
//               <th className="px-2 py-1 border-r">PF#</th>
//               <th className="px-2 py-1 border-r">Name</th>
//               <th className="px-2 py-1 border-r">Dept</th>
//               <th className="px-2 py-1 border-r">Designation</th>
//               <th className="px-2 py-1 border-r">Email</th>
//               <th className="px-2 py-1 border-r">Status</th>
//               <th className="px-2 py-1 border-r text-center">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredUsers.map((user, index) => (
//               <tr
//                 key={user.UserID}
//                 className={`border-b hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
//               >
//                 <td className="px-2 py-1">{user.UserID}</td>
//                 <td className="px-2 py-1">{user.PF_Number}</td>
//                 <td
//                   className="px-2 py-1 text-[#281f5f] cursor-pointer font-semibold hover:underline"
//                   onClick={() => navigate(`/user/${user.UserID}`)}
//                 >
//                   {user.FullName}
//                 </td>
//                 <td className="px-2 py-1">{user.DepartmentID}</td>
//                 <td className="px-2 py-1">{user.Designation}</td>
//                 <td className="px-2 py-1">{user.Email}</td>
//                 <td className="px-2 py-1">{user.Status}</td>
//                 <td className="px-2 py-1 text-center flex justify-center gap-3">
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


import React, { useState } from "react";
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
import userDataJson from "../data/mockUserData.js";

const UsersPage = () => {
  const [users, setUsers] = useState(userDataJson);
  const [search, setSearch] = useState("");
  const [formUser, setFormUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
   const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();


  const filteredUsers = users.filter(
    (user) =>
      user.FullName.toLowerCase().includes(search.toLowerCase()) ||
      user.Email.toLowerCase().includes(search.toLowerCase()) ||
      user.PF_Number.toString().includes(search)
  );

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.UserID !== id));
    }
  };

  const handleEdit = (user) => {
     setIsEdit(true);
    setFormUser(user);
    setShowForm(true);
  };

  const handleAdd = () => {
       setIsEdit(false); 
    setFormUser({
      UserID: users.length + 1,
      PF_Number: "",
      FullName: "",
      DepartmentID: "",
      Designation: "",
      CardNumber: "",
      Email: "",
      Group: "",
      AccessGroup: "",
      Status: "Active",
      StartDateTime: "",
      EndDateTime: "",
      OperatorLevel: "",
      ShiftType: "",
      Fingerprint: "",
      FaceTemplate: "",
      VisualFace: "",
      QRCode: "",
      LastSyncDate: "",
    });
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formUser.UserID && users.find((u) => u.UserID === formUser.UserID)) {
      setUsers(users.map((u) => (u.UserID === formUser.UserID ? formUser : u)));
    } else {
      setUsers([...users, { ...formUser, UserID: users.length + 1 }]);
    }
    setShowForm(false);
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
              {Object.keys(formUser).map((field) =>
                field !== "UserID" ? (
                  <input
                    key={field}
                    type="text"
                    placeholder={field}
                    value={formUser[field]}
                    onChange={(e) =>
                      setFormUser({ ...formUser, [field]: e.target.value })
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
      "ID",
      "PF_Number",
      "FullName",
      "DepartmentID",
      "Designation",
      "CardNumber",
      "Email",
      "Group",
      "AccessGroup",
      "Status",
      "StartDateTime",
      "EndDateTime",
      "OperatorLevel",
      "ShiftType",
      "Fingerprint",
      "FaceTemplate",
      "VisualFace",
      "QRCode",
      "LastSyncDate",
      "Actions",
    ].map((header) => (
      <th
        key={header}
        className="px-2 py-2 border-r font-semibold text-gray-700 text-center"
      >
        {header === "Fingerprint" ? (
          <FaFingerprint className="inline bg-gray-100  text-lg" />
        ) : header === "FaceTemplate" ? (
          <FaUserCircle className="inline bg-gray-100  text-lg" />
        ) : header === "VisualFace" ? (
          <FaCheckCircle className="inline bg-gray-100  text-lg" />
        ) : header === "QRCode" ? (
          <FaQrcode className="inline bg-gray-100  text-lg" />
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
                key={user.UserID}
                className={`border-b hover:bg-gray-50 transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                {Object.keys(user).map((key) => (
                  <td
                    key={key}
                    className={`px-2 py-1 ${
                      key === "FullName"
                        ? "text-[#281f5f] font-semibold cursor-pointer hover:underline"
                        : ""
                    }`}
                    onClick={() =>
                      key === "FullName" && navigate(`/user/${user.UserID}`)
                    }
                  >
                    {user[key]}
                  </td>
                ))}
                <td className="px-2 py-1 flex justify-center gap-2">
                  <button onClick={() => handleEdit(user)}>
                    <FaEdit className="text-blue-600 hover:text-blue-800" />
                  </button>
                  <button onClick={() => handleDelete(user.UserID)}>
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
