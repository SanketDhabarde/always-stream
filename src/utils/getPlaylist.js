export const getPlaylist = (playlistId, playlists) => {
  return playlists?.find((playlist) => playlist._id === playlistId);
};
