/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default */
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import sliceCount from "./ReduxSlice";
import sliceCountThunk from "./ReduxThunk";
import sliceCountSaga from "./ReduxSaga";
import { watchIncrement } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  counter: sliceCount,
  counterThunk: sliceCountThunk,
  counterSaga: sliceCountSaga,
});

export default createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(watchIncrement);
