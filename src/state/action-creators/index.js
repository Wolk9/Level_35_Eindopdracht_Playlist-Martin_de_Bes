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

export const storeResortedList = (newList) => {
  return (dispatch) => {
    dispatch({
      type: "STORE_RESORTED_LIST",
      payload: newList
    });
  };
};
