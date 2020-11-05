import { currentCircuitApiCallStates } from './currentCirtcuitSlice'

const updateApiCallStateAction = (state, action) => {
    if (Object.values(currentCircuitApiCallStates).includes(action.payload))
        state.apiCallState = action.paylaod
}

export default updateApiCallStateAction