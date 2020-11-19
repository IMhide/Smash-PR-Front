import {currentPlayerApiCallStates} from './currentPlayerSlice'

export const updateCircuitPlayerApiCallStateAction = (state, action) => {
    if (Object.values(currentPlayerApiCallStates).includes(action.payload))
        state.apiCallState = action.payload
} 

export default updateCircuitPlayerApiCallStateAction 