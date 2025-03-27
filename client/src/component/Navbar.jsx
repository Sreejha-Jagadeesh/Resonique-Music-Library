import React from "react";
import "./Navbar.css";
import logo from "../assets/resonic.png"; // Import the logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" /> {/* Logo Image */}
      <div className="app-name">Resonique</div>
    </nav>
  );
};

export default Navbar;
