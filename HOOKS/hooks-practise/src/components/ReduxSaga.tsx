/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  countSaga: 0,
};

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
    incrementSaga: (state) => {
      state.countSaga += 0;
    },
  },
});

export const { increment, decrement, incrementSaga, incrementSagaAsync } =
  sliceCountSaga.actions;
export default sliceCountSaga.reducer;
