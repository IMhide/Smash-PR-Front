import { configureStore } from '@reduxjs/toolkit';
import circuitsReducer from 'slices/circuits/circuitSlice'

export default configureStore({
  reducer: {
    circuits: circuitsReducer,
  },
});
