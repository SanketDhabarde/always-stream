export const isVideoExistsInList = (list, id) => {
  return list?.some((video) => video._id === id);
};
