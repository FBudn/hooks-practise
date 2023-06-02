/* eslint-disable import/no-named-as-default */
import { configureStore } from "@reduxjs/toolkit";
import sliceCount from "./ReduxSlice";

export default configureStore({
  reducer: { counter: sliceCount },
});
