import {currentPlayerApiCallStates} from './currentPlayerSlice'

export const updateTournamentsApiStateAction = (state, action) => {
    if (Object.values(currentPlayerApiCallStates).includes(action.payload))
        state.tournaments.apiCallState = action.payload
} 

export default updateTournamentsApiStateAction