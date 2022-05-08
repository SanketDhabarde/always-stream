const initialState = {
  liked: [],
  watchLater: [],
  history: [],
  playlists: [],
};

export const userListsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INIT_USER_LIST":
      const { likes, watchlater, history, playlists } = payload;
      return {
        ...state,
        liked: [...likes],
        watchLater: [...watchlater],
        history: [...history],
        playlists: [...playlists],
      };
    case "UPDATE_LIKED":
      return {
        ...state,
        liked: [...payload],
      };
    case "UPDATE_WATCH_LATER":
      return {
        ...state,
        watchLater: [...payload],
      };
    case "UPDATE_HISTORY":
      return {
        ...state,
        history: [...payload],
      };
    case "UPDATE_PLAYLISTS":
      return {
        ...state,
        playlists: [...payload],
      };
    case "UPDATE_PLAYLIST_VIDEOS":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === payload._id
            ? { ...playlist, videos: [...payload.videos] }
            : playlist
        ),
      };
    case "CLEAR_USER_LISTS":
      return {
        ...state,
        liked: [],
        watchlater: [],
      };
    default:
      return state;
  }
};
