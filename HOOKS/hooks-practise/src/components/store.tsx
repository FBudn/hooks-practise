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

// store do reduxa

const sagaMiddleware = createSagaMiddleware();

// podpinam reducery z różnych slice'ów
export const rootReducer = combineReducers({
  counter: sliceCount,
  counterThunk: sliceCountThunk,
  counterSaga: sliceCountSaga,
});
// tworzę sklep podpinam middlewary
export default createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

// obserwuje akcję dla sagi
sagaMiddleware.run(watchIncrement);
