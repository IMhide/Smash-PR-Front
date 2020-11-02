import { createSlice } from '@reduxjs/toolkit';
import updateCategoryAction from './updateCategoryAction'
import updateNameAction from './updateNameAction'
import updateIdAction from './updateIdAction'
import updateApiCallStateAction from './updateApiCallStateAction'
import updateCurrentCircuitAsyncAction from './updateCurrentCircuitAsyncAction'

export const currentCircuitApiCallStates = { 
    INITIALIZED: 0,
    SENT: 1,
    SUCCESS: 2,
    FAILED: 3
 }

export const currentCircuitSlice = createSlice({
    name: 'currentCircuit',
    initialState: {
        id: undefined,
        name: 'Classement en cours de chargement',
        category: '',
        apiCallState: currentCircuitApiCallStates.INITIALIZED 
    },
    reducers: {
        updateName: updateNameAction,
        updateId: updateIdAction,
        updateCategory: updateCategoryAction,
        updateApiCallState: updateApiCallStateAction,
    }
});

export const { updateName, updateId, updateCategory, updateApiCallState } = currentCircuitSlice.actions;

export const updateCurrentCircuitAsync = updateCurrentCircuitAsyncAction;

export const selectCurrentCircuit = (state) => (state.currentCircuit)
export default currentCircuitSlice.reducer