import React from "react";
import "./Explore.css";
import { Chips, Sidebar, Spinner, VideoCard } from "../../components";
import { useDebounce, useFetch, useTitle } from "../../hooks";
import { useFilter, useSearch } from "../../context";
import { filterVideos, searchVideos } from "../../utils";
import { CATEGORIES } from "../../consts";

function Explore() {
  const [{ data, isLoading, isError }] = useFetch("api/videos", []);
  const { videos } = data;
  useTitle("Explore");
  const { filter } = useFilter();
  const { searchBy } = useSearch();
  const filteredVideos = filterVideos(videos, filter);
  const debounceValue = useDebounce(searchBy, 500);
  let searchedVideos = searchVideos(filteredVideos, debounceValue);
  if (debounceValue) {
    searchedVideos = searchVideos(filteredVideos, debounceValue);
  }

  return (
    <div className="explore">
      <Sidebar />
      <div className="explore-videos">
        <div className="explore-video-filters p-1">
          <Chips title="All" />
          {CATEGORIES.map(({ _id, category }) => (
            <Chips key={_id} title={category} />
          ))}
        </div>
        <hr className="separator" />
        <div className="explore-video-listing pt-2">
          {searchedVideos?.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
          {isError && <div className="error-msg">Something went wrong😥</div>}
          {isLoading && <Spinner />}
          {searchBy && !searchedVideos.length && <div className="error-msg">No videos present as per search😥</div>}
        </div>
      </div>
    </div>
  );
}

export default Explore;
