import React from "react";
import { Link } from "react-router-dom";
import { PlaylistCard, Sidebar } from "../../components";
import { useUserLists } from "../../context";
import { useTitle } from "../../hooks";
import "./Playlists.css";

function Playlists() {
  useTitle("Playlists");
  const { userListsState } = useUserLists();
  const { playlists } = userListsState;

  return (
    <div className="playlists-listing">
      <Sidebar />
      <div className="playlists-videos">
        {!playlists.length ? (
          <div className="center-div">
            Don't have any playlists.
            <Link to="/explore" className="btn-link btn-underline px-1">
              Explore
            </Link>
            🧐
          </div>
        ) : (
          <div className="playlists-video-listing pt-2">
            {playlists?.map(({ _id, title }) => (
              <PlaylistCard key={_id} id={_id} title={title} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Playlists;
