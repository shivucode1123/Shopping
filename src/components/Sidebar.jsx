import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-64 bg-black text-white p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-6">E-Commerce</h1>

        <nav className="flex flex-col gap-4">
          <Link to="/dashboard">Home</Link>
          <Link to="/dashboard/products">Products</Link>
          <Link to="/dashboard/users">Users</Link>
        </nav>
      </div>

      <button
        onClick={logoutHandler}
        className="text-red-400 text-left"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;