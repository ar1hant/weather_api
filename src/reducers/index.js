import {combineReducers} from "redux";
import placeReducer from "./place_reducer";
import placeDataReducer from "./place_data_reducer";
import themeReducer from "./theme_reducer";

const rootReducer = combineReducers({
  place: placeReducer,
  placeData: placeDataReducer,
  theme: themeReducer,
});

export default rootReducer;