/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { takeEvery, put, delay } from "redux-saga/effects";
import { incrementSaga, incrementSagaAsync } from "./ReduxSaga";

// opóźniam i zwracam nową akcję, która zmienia już stan countera, która dosięga reducera
function* IncrementAsync() {
  yield delay(2000);
  yield put(incrementSagaAsync());
}

// przechwytuje incrementSaga(z console.logiem), na każdym kliknięciu, potem wywołuje IncrementAsync
export function* watchIncrement() {
  yield takeEvery(incrementSaga.toString(), IncrementAsync);
}
