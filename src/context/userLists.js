import axios from "axios";
import { useContext, createContext, useReducer, useEffect } from "react";
import { userListsReducer } from "../reducers";
import { useAuth } from "./auth";

const UserListsContext = createContext();

const useUserLists = () => useContext(UserListsContext);

const UserListsProvider = ({ children }) => {
  const [userListsState, userListsDispatch] = useReducer(userListsReducer, {
    liked: [],
  });
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const {
            data: { likes },
          } = await axios.get("/api/user/likes", {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          });
          userListsDispatch({ type: "INIT_LIKED", payload: likes });
        } catch (error) {
          console.error(error.message);
        }
      })();
    }
  }, [user]);

  return (
    <UserListsContext.Provider value={{ userListsState, userListsDispatch }}>
      {children}
    </UserListsContext.Provider>
  );
};

export { UserListsProvider, useUserLists };
