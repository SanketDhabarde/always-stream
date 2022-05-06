import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, VideoCard } from "../../components";
import { useUserLists } from "../../context";
import { useTitle } from "../../hooks";
import "./LikedVideos.css";

function LikedVideos() {
  useTitle("Liked videos");
  const { userListsState } = useUserLists();
  const { liked } = userListsState;
  return (
    <div className="liked">
      <Sidebar />
      <div className="liked-videos">
        {!liked.length ? (
          <div className="center-div">
            Don't have any liked videos.
            <Link to="/explore" className="btn-link btn-underline px-1">
              Explore
            </Link>
            🧐
          </div>
        ) : (
          <div className="liked-video-listing pt-2">
            {liked?.map((video) => (
              <VideoCard key={video._id} {...video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LikedVideos;
