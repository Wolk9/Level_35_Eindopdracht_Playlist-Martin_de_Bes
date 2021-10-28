export const addSong = (newSong) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_SONG",
      payload: newSong
    });
  };
};

export const removeSong = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_SONG",
      payload: id
    });
  };
};

// export const editTitle = (title) => {
//   return (dispatch) => {
//     dispatch({
//       type: "EDIT_TITLE",
//       payload: title
//     });
//   };
// };
// export const editArtist = (artist) => {
//   return (dispatch) => {
//     dispatch({
//       type: "EDIT_ARTIST",
//       payload: artist
//     });
//   };
// };

// export const editGenre = (genre) => {
//   return (dispatch) => {
//     dispatch({
//       type: "EDIT_GENRE",
//       payload: genre
//     });
//   };
// };
// export const editRating = (rating) => {
//   return (dispatch) => {
//     dispatch({
//       type: "EDIT_RATING",
//       payload: rating
//     });
//   };
// };
