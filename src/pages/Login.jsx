import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields required");
      return;
    }

    localStorage.setItem("token", "frontend-auth-token");
    localStorage.setItem("userEmail", email);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-gray-400">Sign in to continue</p>

        <input
          className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-white text-black py-2 rounded">
          Sign In
        </button>

        <p className="text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-white">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;