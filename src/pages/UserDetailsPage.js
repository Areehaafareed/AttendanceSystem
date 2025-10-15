import React from "react";
import { useParams, Link } from "react-router-dom";
import userDataJson from "../data/mockUserData.js";

const UserDetailsPage = () => {
  const { id } = useParams();
  const user = userDataJson.find((u) => u.UserID === Number(id));

  if (!user) return <div className="p-6">User not found.</div>;

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <Link to="/users" className="text-[#281f5f] font-semibold hover:underline">
        ← Back to Users
      </Link>
      <h2 className="text-2xl font-bold text-[#281f5f] mt-3 mb-5">{user.FullName}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        {Object.entries(user).map(([key, value]) => (
          <div key={key} className="flex justify-between border-b pb-1">
            <span className="font-semibold text-gray-600">{key}:</span>
            <span className="text-gray-800">{value.toString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetailsPage;
