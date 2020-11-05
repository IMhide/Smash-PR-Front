import {currentPlayerApiCallStates} from './currentPlayerSlice'

export const updateMatchesApiStateAction = (state, action) => {
    if (Object.values(currentPlayerApiCallStates).includes(action.payload))
        state.matches.apiCallState = action.payload
} 

export default updateMatchesApiStateAction