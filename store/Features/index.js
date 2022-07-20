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
  readMore: false,
  text: "",
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
    setReadMore: (state, { payload }) => {
      state.readMore = payload;
    },
    setText: (state, { payload }) => {
      state.text = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchNFT, setReadMore,setText } = stylesReducer.actions;
export const selectData = (state) => state.styleSlice;
export default stylesReducer.reducer;
