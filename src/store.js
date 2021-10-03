import { configureStore } from "@reduxjs/toolkit";
import Reactotron from "initializers/reactotron";
import rankingsReducer from "slices/rankings/rankingsSlice";
import searchReducer from "slices/search/searchSlice";
import currentCircuitReducer from "slices/currentCircuit/currentCirtcuitSlice";
import currentPlayerReducer from "slices/currentPlayer/currentPlayerSlice";

export default configureStore({
  reducer: {
    rankings: rankingsReducer,
    currentCircuit: currentCircuitReducer,
    search: searchReducer,
    currentPlayer: currentPlayerReducer,
  },
  enhancers: [Reactotron.createEnhancer()],
});
