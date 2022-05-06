import axios from "axios";

export const likedVideo = async (video, userListsDispatch) => {
  try {
    const {
      data: { likes },
    } = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    userListsDispatch({ type: "UPDATE_LIKED", payload: likes });
  } catch (e) {
    console.error(e.message);
  }
};
