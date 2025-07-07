import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  const linkStyle = { color: "white" };

  return (
    <>
      {user ? (
        <>
          <div className="navbarContainer">
            <Link to="/home" style={linkStyle} className="linkDesign">
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
            <Link to="/messageboard" style={{ color: "white" }}>
              Message Board
            </Link>{" "}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Navbar;
