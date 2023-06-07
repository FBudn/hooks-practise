/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";

// funkcje "sagi" są w pliku sagas.tsx
// tu rozpiska do countera pod sagę prostego z dodawaniem tylko

export const initialState = {
  countSaga: 0,
};

// na dole zbędne increment i decrement w sumie i dwie funkcje do odpalenia asynchronicznie
// przechwytuję incrementSaga(która nie dosiega już reducera), które na klika w buttonie tylko wyświetla info a potem działa
// incrementSagaAsync, które zmienia już stan. Patrz: sagas.tsx
export const sliceCountSaga = createSlice({
  name: "counterSaga",
  initialState,
  reducers: {
    increment: (state) => {
      state.countSaga += 1;
    },
    decrement: (state) => {
      state.countSaga -= 1;
    },
    incrementSagaAsync: (state) => {
      state.countSaga += 1;
    },
    incrementSaga: () => {
      console.log(`Saga button clicked caught`);
    },
  },
});

export const { increment, decrement, incrementSaga, incrementSagaAsync } =
  sliceCountSaga.actions;
export default sliceCountSaga.reducer;
