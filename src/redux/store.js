import thunk from "redux-thunk";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducer } from "./combineReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
