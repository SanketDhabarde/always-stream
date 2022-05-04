import React from "react";
import { Link } from "react-router-dom";
import { useToggle } from "../../hooks";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import "./Navbar.css";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useToggle();

  return (
    <>
      <header className="navbar px-3">
        <div className="header">
          <div className="menu" onClick={() => setIsNavbarVisible()}>
            <i className="fas fa-bars"></i>
          </div>

          <div className="header-brand">
            <Link to="/" className="btn-link">
              Always Stream
            </Link>
          </div>
        </div>
        <div className="right-nav center-div">
          <Link
            to="/profile"
            className="badge-icon-wrapper center-div p-1 btn-link"
            title="User"
          >
            <i className="far fa-user"></i>
          </Link>
        </div>
      </header>
      {isNavbarVisible && (
        <MobileNavbar setIsNavbarVisible={setIsNavbarVisible} />
      )}
    </>
  );
}

export default Navbar;
