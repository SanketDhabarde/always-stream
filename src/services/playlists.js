import axios from "axios";
import { getBaseUrl } from "../utils";

const addNewPlaylist = async (newPlaylist, userListsDispatch) => {
  try {
    const {
      data: { playlists },
    } = await axios.post(
      `${getBaseUrl()}/api/user/playlists`,
      {
        title: newPlaylist.trim(),
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    userListsDispatch({ type: "UPDATE_PLAYLISTS", payload: playlists });
  } catch (e) {
    console.error(e);
  }
};

const removePlaylist = async (playlistId, userListsDispatch) => {
  try {
    const {
      data: { playlists },
    } = await axios.delete(`${getBaseUrl()}/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    userListsDispatch({ type: "UPDATE_PLAYLISTS", payload: playlists });
  } catch (e) {
    console.error(e);
  }
};

const addVideoInPlaylist = async (playlistId, video, userListsDispatch) => {
  try {
    const {
      data: { playlist },
    } = await axios.post(
      `${getBaseUrl()}/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    userListsDispatch({ type: "UPDATE_PLAYLIST_VIDEOS", payload: playlist });
  } catch (e) {
    console.error(e);
  }
};

const removeVideoFromPlaylist = async (
  playlistId,
  videoId,
  userListsDispatch
) => {
  try {
    const {
      data: { playlist },
    } = await axios.delete(
      `${getBaseUrl()}/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    userListsDispatch({ type: "UPDATE_PLAYLIST_VIDEOS", payload: playlist });
  } catch (e) {
    console.error(e);
  }
};

export {
  addNewPlaylist,
  removePlaylist,
  addVideoInPlaylist,
  removeVideoFromPlaylist,
};
