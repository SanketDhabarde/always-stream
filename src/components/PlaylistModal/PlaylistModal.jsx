import React, { useState } from "react";
import { useUserLists } from "../../context";
import { useToggle } from "../../hooks";
import {
  addNewPlaylist,
  addVideoInPlaylist,
  removeVideoFromPlaylist,
} from "../../services";
import { isVideoExistsInList } from "../../utils";
import "./PlaylistModal.css";

function PlaylistModal({ setIsModalVisible, video }) {
  const [showCreatePlaylist, setShowCreatePlaylist] = useToggle();
  const [newPlaylist, setNewPlaylist] = useState("");
  const { userListsState, userListsDispatch } = useUserLists();
  const { playlists } = userListsState;

  const createNewPlaylistHandler = (event) => {
    event.preventDefault();
    if (newPlaylist) {
      addNewPlaylist(newPlaylist, userListsDispatch);
      setNewPlaylist("");
    }
  };

  const playlistHandler = (event, playlistId) => {
    if (event.target.checked) {
      addVideoInPlaylist(playlistId, video, userListsDispatch);
    } else {
      removeVideoFromPlaylist(playlistId, video._id, userListsDispatch);
    }
  };

  return (
    <div className="backdrop" onClick={setIsModalVisible}>
      <div className="playlist-modal" onClick={(e) => e.stopPropagation()}>
        <div className="playlist-header p-2">
          <h4>Save to...</h4>
          <div className="close-icon center-div" onClick={setIsModalVisible}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <hr className="separator" />
        <div className="playlists p-2">
          {playlists?.map(({ _id, title, videos }) => (
            <label className="playlist py-1" key={_id}>
              <input
                type="checkbox"
                className="check"
                checked={isVideoExistsInList(videos, video._id)}
                onChange={(event) => playlistHandler(event, _id)}
              />
              <p>{title}</p>
            </label>
          ))}
        </div>
        <hr className="separator" />
        <div className="create-playlist p-2">
          <div className="create" onClick={setShowCreatePlaylist}>
            <i className="fas fa-plus"></i>
            <p>Create new playlist</p>
          </div>
          {showCreatePlaylist && (
            <form className="py-2" onSubmit={createNewPlaylistHandler}>
              <input
                type="text"
                className="create-playlist-input"
                autoFocus
                value={newPlaylist}
                required
                onChange={(e) => setNewPlaylist(e.target.value)}
              />
              <button type="submit" className="btn-create">
                CREATE
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlaylistModal;
