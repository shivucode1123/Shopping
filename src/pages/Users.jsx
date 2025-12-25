import React from "react";
import { useState } from "react";
import { users } from "../Data/UserData";
import { userRatings } from "../Data/data";

const Users = () => {
  const [selectedRating, setSelectedRating] = useState(userRatings[0]);

  const filteredUsers = users.filter(
    (user) =>
      user.rating >= selectedRating.min &&
      user.rating <= selectedRating.max
  );

  return (
    <div className="text-white">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-1">Users</h1>
      <p className="text-gray-400 mb-6">
        Manage and filter users ({filteredUsers.length} users)
      </p>

      {/* Filters */}
      <div className="bg-[#0f172a] rounded-xl p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        <div className="max-w-sm">
          <label className="block text-sm mb-2">User Rating</label>
          <select
            className="w-full bg-[#020617] border border-gray-700 rounded px-3 py-2"
            onChange={(e) =>
              setSelectedRating(userRatings[e.target.selectedIndex])
            }
          >
            {userRatings.map((rate) => (
              <option key={rate.label}>{rate.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-[#020617] rounded-xl p-5 shadow"
          >
            {/* Top Section */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-yellow-400">
                  ⭐ {user.rating}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 {user.email}</p>
              <p>📞 {user.phone}</p>
              <p>📦 {user.totalOrders} orders</p>
              <p>
                📅 Joined{" "}
                {new Date(user.joinedDate).toLocaleDateString("en-GB")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;