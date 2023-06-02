/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default */
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import thunk from "redux-thunk";
import sliceCount from "./ReduxSlice";
import sliceCountThunk from "./ReduxThunk";

export const rootReducer = combineReducers({
  counter: sliceCount,
  counterThunk: sliceCountThunk,
});

export default createStore(rootReducer, applyMiddleware(thunk));
