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

export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount
    });
  };
};
