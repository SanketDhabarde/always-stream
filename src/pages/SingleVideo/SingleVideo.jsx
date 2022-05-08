import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PlaylistModal, Sidebar, Spinner } from "../../components";
import { useAuth, useUserLists } from "../../context";
import { useFetch, useTitle, useToggle } from "../../hooks";
import {
  addToWatchLater,
  dislikedVideo,
  likedVideo,
  removeFromWatchLater,
} from "../../services";
import { isVideoExistsInList } from "../../utils";
import "./SingleVideo.css";

function SingleVideo() {
  useTitle("video");
  const { videoId } = useParams();
  const [{ data, isLoading, isError }] = useFetch(`/api/video/${videoId}`, []);
  const { video } = data;
  const { title, views, description, avatar, creatorName } = video ?? {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { userListsState, userListsDispatch } = useUserLists();
  const { liked, watchLater } = userListsState;
  const [isModalVisible, setIsModalVisible] = useToggle();

  const likeHandler = () => {
    if (user) {
      if (isVideoExistsInList(liked, video?._id)) {
        dislikedVideo(video, userListsDispatch);
      } else {
        likedVideo(video, userListsDispatch);
      }
    } else {
      navigate("/login", { replace: true, state: { from: location } });
    }
  };

  const watchLaterHandler = () => {
    if (user) {
      if (isVideoExistsInList(watchLater, video?._id)) {
        removeFromWatchLater(video, userListsDispatch);
      } else {
        addToWatchLater(video, userListsDispatch);
      }
    } else {
      navigate("/login", { replace: true, state: { from: location } });
    }
  };

  return (
    <div className="single-video-pg">
      <Sidebar />
      <div className="single-video px-3">
        <div className="single-video-view">
          {!isLoading && !isError && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          {isError && <div className="center-div">Something went wrong😥</div>}
          {isLoading && <Spinner />}
        </div>
        <div className="single-video-disc">
          {!isLoading && !isError && (
            <>
              <div className="single-video-header py-2">
                <div>
                  <h3>{title}</h3>
                </div>
                <div className="single-video-features py-2">
                  <small>{views} views</small>
                  <div className="video-features">
                    <div className="feature center-div" onClick={likeHandler}>
                      {isVideoExistsInList(liked, video?._id) ? (
                        <i className="fas fa-thumbs-up"></i>
                      ) : (
                        <i className="far fa-thumbs-up"></i>
                      )}

                      <p>
                        {isVideoExistsInList(liked, video?._id)
                          ? `Liked`
                          : `Like`}
                      </p>
                    </div>
                    <div
                      className="feature center-div"
                      onClick={setIsModalVisible}
                    >
                      <i className="far fa-save"></i>
                      <p>Save to playlist</p>
                    </div>
                    <div
                      className="feature center-div"
                      onClick={watchLaterHandler}
                    >
                      {isVideoExistsInList(watchLater, video?._id) ? (
                        <i className="fas fa-clock"></i>
                      ) : (
                        <i className="far fa-clock"></i>
                      )}

                      <p>Watch later</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="separator" />
              <div className="single-video-footer py-2">
                <div className="avatar avatar-sm avatar-single-video m-1">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="img-responsive img-round"
                  />
                </div>
                <div className="video-disc">
                  <h4 className="py-1">{creatorName}</h4>
                  <p>{description}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {isModalVisible && <PlaylistModal setIsModalVisible={setIsModalVisible}/>}
    </div>
  );
}

export default SingleVideo;
