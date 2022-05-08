import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, VideoCard } from "../../components";
import { useUserLists } from "../../context";
import { useTitle } from "../../hooks";
import { clearHistory } from "../../services";
import "./History.css";

function History() {
  useTitle("History");
  const { userListsState, userListsDispatch } = useUserLists();
  const { history } = userListsState;
  return (
    <div className="history">
      <Sidebar />
      <div className="history-videos">
        <div className="history-videos-header p-1">
          <h2>History</h2>
          <div className="clear-history">
            {!!history.length && (
              <button
                className="btn btn-primary btn-clear-history"
                onClick={() => clearHistory(userListsDispatch)}
              >
                Clear all history
              </button>
            )}
          </div>
        </div>
        {!history.length ? (
          <div className="center-div">
            Don't have any history.
            <Link to="/explore" className="btn-link btn-underline px-1">
              Explore
            </Link>
            🧐
          </div>
        ) : (
          <div className="history-video-listing pt-2">
            {history?.map((video) => (
              <VideoCard key={video._id} video={video} deleteFromHistory />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default History;
