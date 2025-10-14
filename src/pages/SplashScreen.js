import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", flexDirection: "column",     backgroundColor: "#ffffff" }}
    >
      <div style={{ width: 200, height: 200 }}>
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
      <h1 style={{ color: "#fff", marginTop: "20px" }}>Attendance System</h1>
    </div>
  );
}

export default SplashScreen;
