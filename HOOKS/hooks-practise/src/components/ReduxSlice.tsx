/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  count: 0,
};

export const sliceCount = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = sliceCount.actions;
export default sliceCount.reducer;
