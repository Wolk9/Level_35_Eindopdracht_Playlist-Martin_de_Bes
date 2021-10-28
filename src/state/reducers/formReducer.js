const initialState = [
  {
    id: 1,
    title: "",
    artist: "",
    genre: "",
    rating: 1
  }
];

// const temporaryState = 0;
const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_TITLE":
      console.log("edit title: ", state.form.title, action.payload);
      return (state.form.title = action.payload);
    case "EDIT_ARTIST":
      console.log("edit artist: ", state.form.artist, action.payload);
      return (state.form.artist = action.payload);
    case "EDIT_GENRE":
      console.log("edit genre: ", state.form.genre, action.payload);
      return (state.form.genre = action.payload);
    case "EDIT_RATING":
      console.log("edit rating: ", state.form.rating, action.payload);
      return (state.form.rating = action.payload);
    default:
      return state;
  }
};

export default formsReducer;
