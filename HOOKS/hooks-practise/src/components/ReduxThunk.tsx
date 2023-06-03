/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
  countThunk: 0,
};

async function delay(milliseconds: number, count: number): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(count);
    }, milliseconds);
  });
}

export const incrementThunkFn = createAsyncThunk(
  "counterThunk/incrementThunkFn",
  async () => {
    const response = await delay(2000, 2);
    return response;
  },
);
/*
 () => {
    setTimeout(() => {
      console.log(`Im async thunk function`);
      sliceCountThunk.actions.incrementAsync();
    }, 2000);
  },
*/
export const sliceCountThunk = createSlice({
  name: "counterThunk",
  initialState,
  reducers: {
    increment: (state) => {
      state.countThunk += 1;
    },
    incrementAsync: (state) => {
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
