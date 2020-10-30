import { configureStore } from '@reduxjs/toolkit';
import circuitsReducer from 'slices/circuits/circuitSlice'
import metaDatasReducer from 'slices/metaDatas/metaDatasSlice'

export default configureStore({
  reducer: {
    circuits: circuitsReducer,
    metaDatas: metaDatasReducer
  },
});
