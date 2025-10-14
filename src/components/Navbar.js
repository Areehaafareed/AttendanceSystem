import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#1167c2ff" }}>
      <div className="container">
        <Link 
          className="navbar-brand text-white fw-bold" 
          to="/"
          style={{ fontSize: "1.5rem" }}
        >
          Attendance System
        </Link>
        <div className="d-flex">
          <Link 
            className="nav-link text-white mx-2" 
            to="/users"
          >
            Users
          </Link>
          <Link 
            className="nav-link text-white mx-2" 
            to="/devices"
          >
            Devices
          </Link>
          <Link 
            className="nav-link text-white mx-2" 
            to="/eventlogs"
          >
            Event Logs
          </Link>
          <Link 
            className="nav-link text-white mx-2" 
            to="/attendance"
          >
            Attendance
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

