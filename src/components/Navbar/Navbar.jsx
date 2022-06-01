import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useSearch } from "../../context";
import { useToggle } from "../../hooks";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import "./Navbar.css";

function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useToggle();
  const { pathname } = useLocation();
  const { searchBy, setSearchBy } = useSearch();
  const { user } = useAuth();

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
        {pathname === "/explore" && (
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              className="input-textbox p-1"
              value={searchBy}
              onChange={(event) => setSearchBy(event.target.value)}
            />
          </div>
        )}

        <div className="right-nav center-div px-1">
          <Link
            to="/profile"
            className="badge-icon-wrapper center-div p-1 btn-link"
            title="User"
          >
            <div className="user text-center">
              <i className="far fa-user"></i>
              <p
                className="user-name"
                title={user ? `Hi ${user.firstName}` : `Profile`}
              >
                {user ? `Hi ${user.firstName}` : `Profile`}
              </p>
            </div>
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
