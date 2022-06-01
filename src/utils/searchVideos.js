export const searchVideos = (videos, searchBy) => {
  if (searchBy) {
    return videos?.filter((video) =>
      video.title.toLowerCase().includes(searchBy.toLowerCase())
    );
  }
  return videos;
};
