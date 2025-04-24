import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = { color: "white" };

  return (
    <div className="navbarContainer">
      <Link to="/" style={linkStyle} className="linkDesign">
        Home
      </Link>
      <Link to="/hearty" style={linkStyle} className="linkDesign">
        HeartRyan
      </Link>
      {/* <Link to="/booth" style={{ color: "white" }}>
        Booth
      </Link>
      <Link to="/messages" style={{ color: "white" }}>
        Messages
      </Link> */}
    </div>
  );
};

export default Navbar;
