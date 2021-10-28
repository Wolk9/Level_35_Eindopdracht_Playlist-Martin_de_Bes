const initialState = [
  {
    id: 123,
    title: "jasmine",
    artist: "breaky break",
    genre: "pop",
    rating: 4
  }
];

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
    default:
      return state;
  }
};

export default songReducer;
