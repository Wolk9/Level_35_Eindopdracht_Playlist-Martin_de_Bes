const initialState = [];

// const temporaryState = 0;
const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SONG":
      console.log("state: ", state, "payload: ", action.payload);
      return [...state, action.payload];
    case "REMOVE_SONG":
      console.log("remove song: ", action.payload.id);
      console.log(state);
      const newState = state.filter((song) => song.id !== action.payload.id);
      console.log(newState);
      return newState;
    case "STORE_RESORTED_LIST":
      console.log("sort list", action.payload);
      return [...action.payload];
    default:
      return state;
  }
};

export default songReducer;
