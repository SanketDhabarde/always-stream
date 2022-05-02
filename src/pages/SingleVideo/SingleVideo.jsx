import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Sidebar, Spinner } from "../../components";
import { useFetch, useTitle } from "../../hooks";
import "./SingleVideo.css";

function SingleVideo() {
  useTitle("video");
  const { videoId } = useParams();
  const [{ data, isLoading, isError }] = useFetch(`/api/video/${videoId}`, []);
  const { video } = data;
  const { title, views, description, avatar, creatorName } = video ?? {};
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
                    <div className="feature center-div">
                      <i className="far fa-thumbs-up"></i>
                      <p>Like</p>
                    </div>
                    <div className="feature center-div">
                      <i className="far fa-save"></i>
                      <p>Save to playlist</p>
                    </div>
                    <div className="feature center-div">
                      <i className="far fa-clock"></i>
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
    </div>
  );
}

export default SingleVideo;
