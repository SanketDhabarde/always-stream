import axios from "axios";

const likedVideo = async (video, userListsDispatch) => {
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

const dislikedVideo = async (video, userListsDispatch) => {
  try {
    const {
      data: { likes },
    } = await axios.delete(`/api/user/likes/${video?._id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    userListsDispatch({ type: "UPDATE_LIKED", payload: likes });
  } catch (e) {
    console.error(e.message);
  }
};

export { likedVideo, dislikedVideo };
