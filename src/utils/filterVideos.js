export const filterVideos = (videos, filterBy) => {
  console.log(filterBy.toLowerCase());
  if (filterBy.toLowerCase() !== "all") {
    return videos?.filter((video) => video.category === filterBy.toLowerCase());
  }
  return videos;
};
