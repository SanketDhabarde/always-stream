import React from "react";
import { Link } from "react-router-dom";
import "./PlaylistCard.css";

function PlaylistCard({ id, title }) {
  return (
    <Link to={`/playlist/${id}`} className="card p-2 playlist-card m-1 btn-link">
      <p>{title}</p>
      <div className="visit-list-icon">
        <i className="fas fa-external-link-alt"></i>
      </div>
    </Link>
  );
}

export default PlaylistCard;
