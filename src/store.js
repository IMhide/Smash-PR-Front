import { configureStore } from '@reduxjs/toolkit';
import Reactotron from 'initializers/reactotron'
import circuitsReducer from 'slices/circuits/circuitSlice'
import metaDatasReducer from 'slices/metaDatas/metaDatasSlice'
import searchReducer from 'slices/search/searchSlice'
import currentCircuitReducer from 'slices/currentCircuit/currentCirtcuitSlice'
import currentPlayerReducer from 'slices/currentPlayer/currentPlayerSlice'

export default configureStore({
  reducer: {
    circuits: circuitsReducer,
    metaDatas: metaDatasReducer,
    currentCircuit: currentCircuitReducer,
    search: searchReducer,
    currentPlayer: currentPlayerReducer
 },
  enhancers: [Reactotron.createEnhancer()]
});
