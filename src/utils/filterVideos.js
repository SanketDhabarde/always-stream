export const filterVideos = (videos, filterBy) => {
  if (filterBy.toLowerCase() !== "all") {
    return videos?.filter((video) => video.category === filterBy.toLowerCase());
  }
  return videos;
};
