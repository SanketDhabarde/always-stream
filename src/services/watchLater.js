import axios from "axios";
import { getBaseUrl } from "../utils";

const addToWatchLater = async (video, userListsDispatch) => {
  try {
    const {
      data: { watchlater },
    } = await axios.post(
      `${getBaseUrl()}/api/user/watchlater`,
      { video },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    userListsDispatch({ type: "UPDATE_WATCH_LATER", payload: watchlater });
  } catch (e) {
    console.error(e.message);
  }
};

const removeFromWatchLater = async (video, userListsDispatch) => {
  try {
    const {
      data: { watchlater },
    } = await axios.delete(`${getBaseUrl()}/api/user/watchlater/${video?._id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    userListsDispatch({ type: "UPDATE_WATCH_LATER", payload: watchlater });
  } catch (e) {
    console.error(e.message);
  }
};

export { addToWatchLater, removeFromWatchLater };
