import { currentCircuitApiCallStates } from './currentCirtcuitSlice'

const updateRankingApiCallStateAction = (state, action) => {
    if (Object.values(currentCircuitApiCallStates).includes(action.payload))
        state.ranking.apiCallState = action.payload
}

export default updateRankingApiCallStateAction