import React from "react";
import "./Explore.css";
import { Sidebar, Spinner, VideoCard } from "../../components";
import { useFetch, useTitle } from "../../hooks";
import { useFilter } from "../../context";
import { filterVideos } from "../../utils";

function Explore() {
  const [{ data, isLoading, isError }] = useFetch("api/videos", []);
  const { videos } = data;
  useTitle("Explore");
  const { filter } = useFilter();
  const filteredVideos = filterVideos(videos, filter);
  return (
    <div className="explore">
      <Sidebar />
      <div className="explore-video-listing">
        {filteredVideos?.map((video) => (
          <VideoCard key={video._id} {...video} />
        ))}
        {isError && <div>Something went wrong😥</div>}
        {isLoading && <Spinner />}
      </div>
    </div>
  );
}

export default Explore;
