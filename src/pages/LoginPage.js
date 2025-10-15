

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login validation
    if (email === "admin@example.com" && password === "1234") {
      setError("");
      setSuccess("Logged in successfully!");

      // Hide success message after 2 seconds and navigate
      setTimeout(() => {
        setSuccess("");
        navigate("/dashboard");
      }, 2000);
    } else {
      setError("Invalid email or password");
      setSuccess("");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#ffffff" }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          border: "1px solid #6f42c1", // Purple border
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          backgroundColor: "#ffffff",
          position: "relative",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#6f42c1" }}>
          Login
        </h2>
        <form onSubmit={handleLogin}>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <p className="mt-3 text-center">
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

