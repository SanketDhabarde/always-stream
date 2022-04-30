import React from "react";
import "./Explore.css";
import { Chips, Sidebar, Spinner, VideoCard } from "../../components";
import { useFetch, useTitle } from "../../hooks";
import { useFilter } from "../../context";
import { filterVideos } from "../../utils";
import { CATEGORIES } from "../../consts";

function Explore() {
  const [{ data, isLoading, isError }] = useFetch("api/videos", []);
  const { videos } = data;
  useTitle("Explore");
  const { filter } = useFilter();
  const filteredVideos = filterVideos(videos, filter);
  return (
    <div className="explore">
      <Sidebar />
      <div className="explore-videos">
        <div className="explore-video-filters p-1">
          <Chips title="All"/>
          {CATEGORIES.map(({ _id, category }) => (
            <Chips key={_id} title={category}/>
          ))}
        </div>
        <hr className="separator"/>
        <div className="explore-video-listing pt-2">
          {filteredVideos?.map((video) => (
            <VideoCard key={video._id} {...video} />
          ))}
          {isError && <div>Something went wrong😥</div>}
          {isLoading && <Spinner />}
        </div>
      </div>
    </div>
  );
}

export default Explore;
