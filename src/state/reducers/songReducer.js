const initialState = [
  {
    id: 0,
    title: "",
    artist: "",
    genre: "",
    rating: 1
  }
];

const temporaryState = 0;
const songReducer = (state = 0, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

export default songReducer;
