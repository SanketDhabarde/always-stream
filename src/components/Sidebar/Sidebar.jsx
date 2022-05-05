import React from "react";
import Nav from "../Nav/Nav";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar py-1">
      <Nav icon={<i className="fas fa-home"></i>} title="Home" link="/" />
      <Nav
        icon={<i className="fas fa-compass"></i>}
        title="Explore"
        link="/explore"
      />
      <Nav
        icon={<i className="fas fa-thumbs-up"></i>}
        title="Liked videos"
        link="/liked"
      />
    </div>
  );
}

export default Sidebar;
