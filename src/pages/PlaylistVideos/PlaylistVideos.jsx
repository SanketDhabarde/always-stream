import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Sidebar, VideoCard } from "../../components";
import { useUserLists } from "../../context";
import { useTitle } from "../../hooks";
import { removePlaylist } from "../../services";
import { getPlaylist } from "../../utils";
import "./PlaylistVideos.css";

function PlaylistVideos() {
  useTitle("Playlist videos");
  const { id } = useParams();
  const { userListsState, userListsDispatch } = useUserLists();
  const { playlists } = userListsState;
  const { title, videos } = getPlaylist(id, playlists) ?? {};
  const navigate = useNavigate();

  const deletePlaylistHandler = () => {
    removePlaylist(id, userListsDispatch);
    navigate(-1); //navigate back to previous page
  };

  return (
    <div className="single-playlist">
      <Sidebar />
      <div className="single-playlist-videos">
        <div className="single-playlist-videos-header p-2">
          <h2># {title || `Playlist`}</h2>
          <div className="clear-single-playlist">
            <button
              className="btn btn-primary btn-clear-single-playlist"
              onClick={deletePlaylistHandler}
            >
              Delete playlist
            </button>
          </div>
        </div>
        {!videos?.length ? (
          <div className="center-div">
            Don't have any videos in playlist.
            <Link to="/explore" className="btn-link btn-underline px-1">
              Explore
            </Link>
            🧐
          </div>
        ) : (
          <div className="single-playlist-video-listing pt-2">
            {videos?.map((video) => (
              <VideoCard key={video._id} video={video} playlistId={id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlaylistVideos;
