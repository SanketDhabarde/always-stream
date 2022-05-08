const initialState = {
  liked: [],
  watchLater: [],
  history: [],
};

export const userListsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INIT_USER_LIST":
      const { likes, watchlater, history } = payload;
      return {
        ...state,
        liked: [...likes],
        watchLater: [...watchlater],
        history: [...history],
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
