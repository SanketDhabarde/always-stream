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
      <nav className="mobile-navs p-2" onClick={() => setIsNavbarVisible()}>
        <NavLink
          to="/profile"
          className="btn-link mobile-nav py-1 border-s my-1"
        >
          <div className="nav-icon px-2">
            <i className="far fa-user"></i>
          </div>
          <div className="nav-title">Profile</div>
        </NavLink>
        <NavLink to="/" className="btn-link mobile-nav py-1 border-s my-1">
          <div className="nav-icon px-2">
            <i className="fas fa-home"></i>
          </div>
          <div className="nav-title">Home</div>
        </NavLink>
        <NavLink
          to="/explore"
          className="btn-link mobile-nav py-1 border-s my-1"
        >
          <div className="nav-icon px-2">
            <i className="fas fa-compass"></i>
          </div>
          <div className="nav-title">Explore</div>
        </NavLink>
        <NavLink to="/liked" className="btn-link mobile-nav py-1 border-s my-1">
          <div className="nav-icon px-2">
            <i className="fas fa-thumbs-up"></i>
          </div>
          <div className="nav-title">Liked videos</div>
        </NavLink>
        <NavLink
          to="/playlists"
          className="btn-link mobile-nav py-1 border-s my-1"
        >
          <div className="nav-icon px-2">
            <i className="fas fa-bars"></i>
          </div>
          <div className="nav-title">Playlists</div>
        </NavLink>
        <NavLink
          to="/watch-later"
          className="btn-link mobile-nav py-1 border-s my-1"
        >
          <div className="nav-icon px-2">
            <i className="fas fa-clock"></i>
          </div>
          <div className="nav-title">Watch later</div>
        </NavLink>
        <NavLink
          to="/history"
          className="btn-link mobile-nav py-1 border-s my-1"
        >
          <div className="nav-icon px-2">
            <i className="fas fa-history"></i>
          </div>
          <div className="nav-title">History</div>
        </NavLink>
      </nav>
    </div>
  );
}

export default MobileNavbar;
