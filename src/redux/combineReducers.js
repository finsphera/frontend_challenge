import { combineReducers } from "redux";
import userReducer from "./users/reducer";
import characterReducer from "./characters/reducer";

export const reducer = combineReducers({
	userReducer,
	characterReducer,
});
