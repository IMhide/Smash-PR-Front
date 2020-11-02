import { currentCircuitApiCallStates } from './currentCirtcuitSlice'

const updateIdAction = (state, action) => {
    if (state.id !== action.payload) {
        state.id = action.payload
        state.apiCallState = currentCircuitApiCallStates.INITIALIZED
    }
}

export default updateIdAction