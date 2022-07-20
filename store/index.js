import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./Features";
export const store = configureStore({
  reducer: {
    main: MainSlice,
  },
});
