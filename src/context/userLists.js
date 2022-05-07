import { useContext, createContext, useReducer } from "react";
import { userListsReducer } from "../reducers";

const UserListsContext = createContext();

const useUserLists = () => useContext(UserListsContext);

const UserListsProvider = ({ children }) => {
  const [userListsState, userListsDispatch] = useReducer(userListsReducer, {
    liked: [],
    watchlater: [],
    history: [],
  });

  return (
    <UserListsContext.Provider value={{ userListsState, userListsDispatch }}>
      {children}
    </UserListsContext.Provider>
  );
};

export { UserListsProvider, useUserLists };
