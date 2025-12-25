import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Missing required fields");
      return;
    }

    localStorage.setItem("registeredUser", JSON.stringify(formData));

    alert("Account created successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">Create account</h1>
        <p className="text-gray-400">Sign up to get started</p>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full bg-transparent border-b border-gray-600 py-2"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full bg-transparent border-b border-gray-600 py-2"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full bg-transparent border-b border-gray-600 py-2"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full bg-transparent border-b border-gray-600 py-2"
          onChange={handleChange}
        />

        <button className="w-full bg-white text-black py-2 rounded">
          Sign Up
        </button>

        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/" className="text-white">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;