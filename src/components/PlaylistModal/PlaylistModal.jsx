import React from "react";
import { useToggle } from "../../hooks";
import "./PlaylistModal.css";

function PlaylistModal({ setIsModalVisible }) {
  const [showCreatePlaylist, setShowCreatePlaylist] = useToggle();

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
          <label className="playlist py-1">
            <input type="checkbox" className="check" />
            <p>playlist 1</p>
          </label>
          <label className="playlist py-1">
            <input type="checkbox" className="check" />
            <p>playlist 1</p>
          </label>
          <label className="playlist py-1">
            <input type="checkbox" className="check" />
            <p>playlist 1</p>
          </label>
        </div>
        <hr className="separator" />
        <div className="create-playlist p-2">
          <div className="create" onClick={setShowCreatePlaylist}>
            <i className="fas fa-plus"></i>
            <p>Create new playlist</p>
          </div>
          {showCreatePlaylist && (
            <form className="py-2">
              <input type="text" className="create-playlist-input" />
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
