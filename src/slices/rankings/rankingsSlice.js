import { createSlice } from "@reduxjs/toolkit";
import updateRankingsAsyncAction from "./updateRankingsAsyncAction";
import updateCurrentRankingAction from "./actions/updateCurentRankingAction";
import updatePreviousRankingsAction from "./actions/updatePreviousRankingsAction";

export const rankingsSlice = createSlice({
  name: "rankings",
  initialState: {
    current: null,
    previous: [],
  },
  reducers: {
    updateCurrentRanking: updateCurrentRankingAction,
    updatePreviousRankings: updatePreviousRankingsAction,
  },
});

export const { updateCurrentRanking, updatePreviousRankings } =
  rankingsSlice.actions;

export const updateRankingsAsync = updateRankingsAsyncAction;
export const selectRankings = (state) => state.rankings;
export default rankingsSlice.reducer;
