import { configureStore } from '@reduxjs/toolkit';
import circuitsReducer from 'slices/circuits/circuitSlice'
import metaDatasReducer from 'slices/metaDatas/metaDatasSlice'
import currentCircuitReducer from 'slices/currentCircuit/currentCirtcuitSlice'

export default configureStore({
  reducer: {
    circuits: circuitsReducer,
    metaDatas: metaDatasReducer,
    currentCircuit: currentCircuitReducer,
  },
});
