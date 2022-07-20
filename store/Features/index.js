import { createSlice } from "@reduxjs/toolkit";
import {
  assets,
  COLORS,
  SHADOWS,
  SIZES,
  FONTS,
  NFTData,
} from "../../constants";
const initialState = {
  assets,
  COLORS,
  SHADOWS,
  SIZES,
  FONTS,
  NFTData,
};

export const stylesReducer = createSlice({
  name: "stylesReducer",
  initialState,
  reducers: {
    searchNFT: (state, { payload }) => {
      if (payload.length === 0) {
        state.NFTData = state.NFTData;
      }
      const filteredData = state.NFTData.filter((item) =>
        item.name.toLowerCase().includes(payload.toLowerCase())
      );
      if (filteredData.length === 0) {
        state.NFTData = state.NFTData;
      } else {
        state.NFTData = filteredData;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchNFT } = stylesReducer.actions;
export const selectData = (state) => state.styleSlice;
export default stylesReducer.reducer;
