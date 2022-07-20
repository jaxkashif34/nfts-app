import { configureStore } from "@reduxjs/toolkit";
import styleSlice from "./Features";
export const store = configureStore({
  reducer: {
    styleSlice,
  },
});
