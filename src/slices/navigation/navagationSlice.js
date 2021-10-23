import { createSlice } from "@reduxjs/toolkit";
import updateRankingIdAction from "./actions/update_ranking_id_action";
import updatePlayerIdAction from "./actions/update_player_id_action";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    ranking_id: null,
    player_id: null,
  },
  reducers: {
    updateRankingId: updateRankingIdAction,
    updatePlayerId: updatePlayerIdAction,
  },
});

export const { updatePlayerId, updateRankingId } = navigationSlice.actions;
export const selectNavigation = (state) => state.navigation;
export default navigationSlice.reducer;
