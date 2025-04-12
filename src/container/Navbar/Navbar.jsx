import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>
      <Link to="/hearty" style={{ color: "white" }}>
        HeartRyan
      </Link>
      <Link to="/booth" style={{ color: "white" }}>
        Booth
      </Link>
      <Link to="/messages" style={{ color: "white" }}>
        Messages
      </Link>
    </div>
  );
};

export default Navbar;
