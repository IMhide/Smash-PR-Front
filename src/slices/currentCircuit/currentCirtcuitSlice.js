import { createSlice } from '@reduxjs/toolkit';
import updateCategoryAction from './updateCategoryAction'
import updateNameAction from './updateNameAction'
import updateIdAction from './updateIdAction'
import updateRankingAction from './updateRankingAction'
import updateTournamentsAction from './updateTournamentsAction'
import updateApiCallStateAction from './updateApiCallStateAction'
import updateRankingApiCallStateAction from './updateRankingApiCallStateAction'
import updateTournamentsApiCallStateAction from './updateTournamentsApiCallStateAction'
import updateCurrentCircuitAsyncAction from './updateCurrentCircuitAsyncAction'
import updateTournamentsAsyncAction from './updateTournamentsAsyncAction'
import updateRankingAsyncAction from './updateRankingAsyncAction'

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
        apiCallState: currentCircuitApiCallStates.INITIALIZED,
        ranking: {
            standing: [],
            apiCallState: currentCircuitApiCallStates.INITIALIZED,
        },
        tournaments: {
            value: [],
            apiCallState: currentCircuitApiCallStates.INITIALIZED
        }
    },
    reducers: {
        updateName: updateNameAction,
        updateId: updateIdAction,
        updateCategory: updateCategoryAction,
        updateApiCallState: updateApiCallStateAction,
        updateTournamentsApiCallState: updateTournamentsApiCallStateAction,
        updateRankingApiCallState: updateRankingApiCallStateAction,
        updateTournaments: updateTournamentsAction,
        updateRanking: updateRankingAction,
    }
});

export const { updateName, updateId, updateCategory, updateApiCallState, 
    updateRanking, updateRankingApiCallState, updateTournaments, updateTournamentsApiCallState } = currentCircuitSlice.actions;

export const updateCurrentCircuitAsync = updateCurrentCircuitAsyncAction;
export const updateTournamentsAsync = updateTournamentsAsyncAction;
export const updateRankingAsync = updateRankingAsyncAction;

export const selectCurrentCircuit = (state) => (state.currentCircuit)
export default currentCircuitSlice.reducer