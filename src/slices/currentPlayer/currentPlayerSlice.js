import { createSlice } from '@reduxjs/toolkit';
import updateIdAction from './updateIdAction'
import updateNameAction from './updateNameAction'
import updateScoreAction from './updateScoreAction'
import updatePositionAction from './updatePositionAction'
import updateMatchesStatsAction from './updateMatchesStatsAction'
import updateSetsStatsAction from './updateSetsStatsAction'
import updateMatchesAction from './updateMatchesAction'
import updateMatchesApiCallStateAction from './updateMatchesApiCallStateAction'
import updateTournamentsApiCallStateAction from './updateTournamentsApiCallStateAction'
import updateTournamentsAction from './updateTournamentsAction'
import updateCircuitPlayerApiCallStateAction from './updateCircuitPlayerApiCallStateAction'
import updateCircuitPlayerInfoAsyncAction from './updateCircuitPlayerInfoAsyncAction'
import updatePlayerTournamentsAsyncAction from './updatePlayerTournamentsAsyncAction'
import updatePlayerRatingsAsyncAction from './updatePlayerRatingsAsyncAction'
import updateParticipantsCountAction from './updateParticipantsCountAction'
import updateTournamentsOpponentSearchAction from './updateTournamentsOpponentSearchAction'

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
        participantsCount: undefined,
        apiCallState: currentPlayerApiCallStates.INITIALIZED,
        matches: {
            values: [],
            apiCallState: currentPlayerApiCallStates.INITIALIZED,
            opponentSearch: '',
        },
        tournaments: {
            values: [],
            apiCallState: currentPlayerApiCallStates.INITIALIZED,
        },
        stats: {
            position: undefined,
            score: undefined,
            matches: {
                win: undefined,
                lose: undefined,
            },
            sets: {
                win: undefined,
                lose: undefined,
            },
        }
    },
    reducers: {
        updateId: updateIdAction,
        updateName: updateNameAction,
        updatePosition: updatePositionAction,
        updateScore: updateScoreAction,
        updateParticipantsCount: updateParticipantsCountAction,
        updateCircuitPlayerApiCallState: updateCircuitPlayerApiCallStateAction,
        updateMatchesStats: updateMatchesStatsAction,
        updateSetsStats: updateSetsStatsAction,
        updateMatches: updateMatchesAction,
        updateMatchesApiCallState: updateMatchesApiCallStateAction,
        updateTournaments: updateTournamentsAction,
        updateTournamentsApiCallState: updateTournamentsApiCallStateAction,
        updateTournamentsOpponentSearch: updateTournamentsOpponentSearchAction, 
    }
});

export const updateCircuitPlayerInfoAsync = updateCircuitPlayerInfoAsyncAction
export const updatePlayerTournamentsAsync = updatePlayerTournamentsAsyncAction
export const updatePlayerRatingsAsync = updatePlayerRatingsAsyncAction

export const {
    updateId, updateName, updatePosition, updateScore, updateMatchesStats,
    updateSetsStats, updateMatches, updateMatchesApiCallState, updateTournaments,
    updateTournamentsApiCallState, updateCircuitPlayerApiCallState, updateParticipantsCount,
    updateTournamentsOpponentSearch,
} = currentPlayerSlice.actions



export const selectCurrentPlayer = (state) => (state.currentPlayer)
export default currentPlayerSlice.reducer
