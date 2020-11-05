import { createSlice } from '@reduxjs/toolkit';
import updateIdAction from './updateIdAction'
import updateNameAction from './updateNameAction'
import updateScoreAction from './updateScoreAction'
import updatePositionAction from './updatePositionAction'
import updateMatchesStatsAction from './updateMatchesStatsAction'
import updateSetsStatsAction from './updateSetsStatsAction'
import updateMatchesAction from './updateMatchesAction'
import updateMatchesApiCallStateAction from './updateMatchesApiCallStateAction'
import updateTournamentsApiCallStateAction from './updateMatchesApiCallStateAction'
import updateTournamentsAction from './updateTournamentsAction'

export const currentPlayerApiCallStates = {
    INITIALIZED: 0,
    SENT: 1,
    SUCCESS: 2,
    FAILED: 3
}

export const currentPlayerSlice = createSlice({
    name: 'currentPlayer',
    initialState: {
        id: undefined,
        name: undefined,
        matches: {
            values: [],
            apiCallState: currentPlayerApiCallStates.INITIALIZED,
        },
        tournaments: {
            values: [],
            apiCallState: currentPlayerApiCallStates.INITIALIZED,
        },
        stats: {
            position: undefined,
            score: undefined,
            matches: undefined,
            sets: undefined
        }
    },
    reducers: {
        updateId: updateIdAction,
        updateName: updateNameAction,
        updatePosition: updatePositionAction,
        updateScore: updateScoreAction,
        updateMatchesStats: updateMatchesStatsAction,
        updateSetsStats: updateSetsStatsAction,
        updateMatches: updateMatchesAction,
        updateMatchesApiCallState: updateMatchesApiCallStateAction,
        updateTournaments: updateTournamentsAction,
        updateTournamentsApiCallState: updateTournamentsApiCallStateAction,    }
});

export const {
    updateId, updateName, updatePosition, updateScore, updateMatchesStats,
    updateSetsStats, updateMatches, updateMatchesApiState, updateTournaments,
    updateTournamentsApiState
 } = currentPlayerSlice.actions

export const selectCurrentPlayer = (state) => (state.currentPlayer)
export default currentPlayerSlice.reducer
