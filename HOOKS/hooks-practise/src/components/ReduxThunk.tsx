/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
  countThunk: 0,
};

export const incrementThunkFn = createAsyncThunk(
  "counterThunk/incrementThunkFn",
  () => {
    setTimeout(() => {
      console.log(`hej`);
    }, 2000);
  },
);

export const sliceCountThunk = createSlice({
  name: "counterThunk",
  initialState,
  reducers: {
    increment: (state) => {
      state.countThunk += 1;
    },
  },
  extraReducers: {
    [incrementThunkFn.fulfilled.type]: (state) => {
      state.countThunk += 1;
    },
  },
});

export const { increment } = sliceCountThunk.actions;
export default sliceCountThunk.reducer;
