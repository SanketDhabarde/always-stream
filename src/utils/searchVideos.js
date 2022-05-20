export const searchVideos = (videos, searchBy) => {
  return videos?.filter((video) =>
    video.title.toLowerCase().includes(searchBy.toLowerCase())
  );
};
