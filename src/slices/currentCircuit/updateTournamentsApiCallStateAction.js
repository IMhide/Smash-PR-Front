import { currentCircuitApiCallStates } from './currentCirtcuitSlice'

const updateTournamentsApiCallStateAction = (state, action) => {
    if (Object.values(currentCircuitApiCallStates).includes(action.payload))
        state.tournaments.apiCallState = action.payload
}

export default updateTournamentsApiCallStateAction