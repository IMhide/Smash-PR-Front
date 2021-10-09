import { configureStore } from "@reduxjs/toolkit";
import Reactotron from "initializers/reactotron";
import rankingsReducer from "slices/rankings/rankingsSlice";
import searchReducer from "slices/search/searchSlice";
import navigationReducer from "slices/navigation/navagationSlice";

export default configureStore({
  reducer: {
    rankings: rankingsReducer,
    search: searchReducer,
    navigation: navigationReducer,
  },
  enhancers: [Reactotron.createEnhancer()],
});
