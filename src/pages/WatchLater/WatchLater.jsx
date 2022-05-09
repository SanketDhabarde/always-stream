import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, VideoCard } from "../../components";
import { useUserLists } from "../../context";
import { useTitle } from "../../hooks";
import "./WatchLater.css";

function WatchLater() {
  useTitle("Watch later videos");
  const { userListsState } = useUserLists();
  const { watchLater } = userListsState;

  return (
    <div className="watchLater">
      <Sidebar />
      <div className="watchLater-videos">
        {!watchLater.length ? (
          <div className="center-div">
            Don't have any videos to watch later.
            <Link to="/explore" className="btn-link btn-underline px-1">
              Explore
            </Link>
            🧐
          </div>
        ) : (
          <div className="watchLater-video-listing pt-2">
            {watchLater?.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WatchLater;
