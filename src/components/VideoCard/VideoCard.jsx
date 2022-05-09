import React from "react";
import { Link } from "react-router-dom";
import { useAuth, useUserLists } from "../../context";
import {
  addToHistory,
  removeFromHistory,
  removeVideoFromPlaylist,
} from "../../services";
import { isVideoExistsInList } from "../../utils";
import "./VideoCard.css";

function VideoCard({ video, deleteFromHistory = false, playlistId }) {
  const { _id, thumbnail, duration, views, title, creatorName, avatar } = video;
  const { userListsState, userListsDispatch } = useUserLists();
  const { history } = userListsState;
  const { user } = useAuth();

  const historyHandler = () => {
    if (user && !isVideoExistsInList(history, _id)) {
      addToHistory(video, userListsDispatch);
    }
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (user) {
      if (deleteFromHistory) {
        removeFromHistory(video, userListsDispatch);
      } else if (playlistId) {
        removeVideoFromPlaylist(playlistId, _id, userListsDispatch);
      }
    }
  };

  return (
    <Link
      to={`/video/${_id}`}
      className="card video-card m-1 btn-link"
      onClick={historyHandler}
    >
      <div className="card-section">
        <img
          className="card-img img-responsive"
          src={thumbnail}
          alt="card img"
        />
        <span className="card-dismiss px-1 border-s center-div">
          <small>{duration}</small>
        </span>
        {(deleteFromHistory || playlistId) && (
          <span
            className="delete-from-history px-1 border-s center-div"
            title="Remove"
            onClick={(e) => deleteHandler(e)}
          >
            <i className="fas fa-trash-alt"></i>
          </span>
        )}
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
