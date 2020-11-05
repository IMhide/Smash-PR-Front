import { configureStore } from '@reduxjs/toolkit';
import circuitsReducer from 'slices/circuits/circuitSlice'
import metaDatasReducer from 'slices/metaDatas/metaDatasSlice'
import currentCircuitReducer from 'slices/currentCircuit/currentCirtcuitSlice'
import Reactotron from 'initializers/reactotron'

export default configureStore({
  reducer: {
    circuits: circuitsReducer,
    metaDatas: metaDatasReducer,
    currentCircuit: currentCircuitReducer,
  },
  enhancers: [Reactotron.createEnhancer()]
});
