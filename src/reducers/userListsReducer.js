const initialState = {
  liked: [],
  watchLater: [],
};

export const userListsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INIT_USER_LIST":
      const { likes, watchlater } = payload;
      return {
        ...state,
        liked: [...likes],
        watchLater: [...watchlater],
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
