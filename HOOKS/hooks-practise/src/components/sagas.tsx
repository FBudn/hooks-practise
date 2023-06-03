/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { takeEvery, put, delay } from "redux-saga/effects";
import { incrementSaga, incrementSagaAsync } from "./ReduxSaga";

/* const delay = (time: any) => {
  setTimeout(() => {
    console.log("Saga delay");
  }, time);
}; */

function* IncrementAsync() {
  yield delay(2000);
  yield put(incrementSagaAsync());
}

export function* watchIncrement() {
  yield takeEvery(incrementSaga.toString(), IncrementAsync);
}
