import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import songReducer from "./songReducer";
//import formsReducer from "./formReducer";

const reducers = combineReducers({
  song: songReducer,
  form: formReducer
  //forms: formsReducer
});

export default reducers;
