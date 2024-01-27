import axios from "axios";
import { getBaseUrl } from "../utils";

const addToHistory = async (video, userListsDispatch) => {
  try {
    const {
      data: { history },
    } = await axios.post(
      `${getBaseUrl()}/api/user/history`,
      { video },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    userListsDispatch({ type: "UPDATE_HISTORY", payload: history });
  } catch (e) {
    console.error(e.message);
  }
};

const removeFromHistory = async (video, userListsDispatch) => {
  try {
    const {
      data: { history },
    } = await axios.delete(`${getBaseUrl()}/api/user/history/${video?._id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    userListsDispatch({ type: "UPDATE_HISTORY", payload: history });
  } catch (e) {
    console.error(e.message);
  }
};

const clearHistory = async (userListsDispatch) => {
  try {
    const {
      data: { history },
    } = await axios.delete(`${getBaseUrl()}/api/user/history/all`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    userListsDispatch({ type: "UPDATE_HISTORY", payload: history });
  } catch (e) {
    console.error(e.message);
  }
};

export { addToHistory, removeFromHistory, clearHistory };
