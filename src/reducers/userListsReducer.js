const initialState = {
  liked: [],
};

export const userListsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INIT_LIKED":
      return {
        ...state,
        liked: payload,
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
