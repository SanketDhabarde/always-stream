import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileNavbar.css";

function MobileNavbar({ setIsNavbarVisible }) {
  return (
    <div className="mobile-navbar">
      <div
        className="mobile-navs-header p-2"
        onClick={() => setIsNavbarVisible()}
      >
        <i className="fas fa-times"></i>
      </div>
      <nav className="mobile-navs p-2">
        <NavLink
          to="/profile"
          className="btn-link mobile-nav py-1 border-s my-1"
        >
          <div className="nav-icon">
            <i className="far fa-user"></i>
          </div>
          <div className="nav-title">Profile</div>
        </NavLink>
      </nav>
    </div>
  );
}

export default MobileNavbar;
