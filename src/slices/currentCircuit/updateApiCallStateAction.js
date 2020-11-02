import currentCircuitApiCallStates from './currentCirtcuitSlice'

const updateApiCallStateAction = (state, action) => {
    if (currentCircuitApiCallStates.includes(action.paylaod))
        state.apiCallState = action.paylaod
} 

export default updateApiCallStateAction