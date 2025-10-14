
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SplashScreen from "./pages/SplashScreen";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import UsersPage from "./pages/UsersPage";
import DevicesPage from "./pages/DevicesPage";
import AttendancePage from "./pages/AttendancePage";
import EventLogsPage from "./pages/EventLogsPage";

function Layout() {
  const location = useLocation();
  const hideSidebarRoutes = ["/", "/login", "/signup"];
  const hideSidebar = hideSidebarRoutes.includes(location.pathname);

  // Define sidebar widths (same as in Sidebar component)
  const sidebarWidthOpen = 288; // 72 * 4 (w-72)
  const sidebarWidthClosed = 80; // 20 * 4 (w-20)

  // Sidebar state (optional but helps handle open/close width)
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="flex w-full">
      {!hideSidebar && (
        <Sidebar setSidebarOpen={setSidebarOpen} open={sidebarOpen} />
      )}

      <div
        className={`flex-1 bg-zinc-100 min-h-screen transition-all duration-300`}
        style={{
          marginLeft: hideSidebar
            ? 0
            : sidebarOpen
            ? sidebarWidthOpen
            : sidebarWidthClosed,
        }}
      >
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/eventlogs" element={<EventLogsPage />} />
        </Routes>
      </div>
    </div>
  );
}


const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
