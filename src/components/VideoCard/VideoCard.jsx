import React from "react";
import { Link } from "react-router-dom";
import "./VideoCard.css";

function VideoCard({ _id, thumbnail, duration, views, title, creatorName, avatar }) {
  return (
    <Link to={`/video/${_id}`} className="card video-card m-1 btn-link">
      <div className="card-section">
        <img
          className="card-img img-responsive"
          src={thumbnail}
          alt="card img"
        />
        <span className="card-dismiss px-1 border-s center-div">
          <small>{duration}</small>
        </span>
        <div className="card-header video-card-header card-body p-1">
          <div className="card-avatar">
            <div className="avatar avatar-sm avatar-video-card m-1">
              <img
                src={avatar}
                alt="avatar"
                className="img-responsive img-round"
              />
            </div>
          </div>
          <div className="card-disc">
            <h4 className="card-header-title" title={title}>
              {title}
            </h4>
            <small className="author-name">{creatorName}</small>
            <small className="author-name">{views} views</small>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
