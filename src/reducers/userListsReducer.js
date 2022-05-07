const initialState = {
  liked: [],
  watchlater: [],
};

export const userListsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INIT_USER_LIST":
      const { likes, watchlater } = payload;
      return {
        ...state,
        liked: [...likes],
        watchlater: [...watchlater],
      };
    case "UPDATE_LIKED":
      return {
        ...state,
        liked: [...payload],
      };
    case "CLEAR_USER_LISTS":
      return {
        ...state,
        liked: [],
      };
    default:
      return state;
  }
};
