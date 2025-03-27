// import React from "react";
// import { FaUser, FaSearch, FaPlusCircle, FaMusic, FaSignOutAlt } from "react-icons/fa";
// import "./BottomNavbar.css"; // Import CSS

// const BottomNavbar = () => {
//   return (
//     <div className="bottom-navbar">
//       <button className="nav-button"><FaUser /></button>
//       <button className="nav-button"><FaSearch /></button>
//       <button className="nav-button add-music"><FaPlusCircle /></button>
//       <button className="nav-button"><FaMusic /></button>
//       <button className="nav-button"><FaSignOutAlt /></button>
//     </div>
//   );
// };

// export default BottomNavbar;
import React from "react";
import { FaUser, FaSearch, FaPlusCircle, FaMusic, FaSignOutAlt } from "react-icons/fa";
import "./BottomNavbar.css"; // Import CSS

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar-wrapper"> {/* Black Footer Bar */}
      <div className="bottom-navbar">
        <button className="nav-button"><FaUser /></button>
        <button className="nav-button"><FaSearch /></button>
        <button className="nav-button add-music"><FaPlusCircle /></button>
        <button className="nav-button"><FaMusic /></button>
        <button className="nav-button"><FaSignOutAlt /></button>
      </div>
    </div>
  );
};

export default BottomNavbar;
