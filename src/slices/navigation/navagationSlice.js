import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    ranking_id: null,
    player_id: null,
  },
  reducers: {},
});

export const selectNavigation = (state) => state.navigation;
export default navigationSlice.reducer;
