import { combineReducers } from "redux";
import songReducer from "./songReducer";

const reducers = combineReducers({
  song: songReducer
});

export default reducers;
