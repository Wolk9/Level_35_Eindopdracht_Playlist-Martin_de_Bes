const initialState = [];

// const temporaryState = 0;
const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SONG":
      console.log("state: ", state, "payload: ", action.payload);
      const newList = [...state, action.payload];
      return newList;

    case "REMOVE_SONG":
      return;
    default:
      return state;
  }
};

export default songReducer;
