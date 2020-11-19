import getCircuitPlayer from 'lib/getCircuitPlayer'
import {
    currentPlayerApiCallStates,
    updateCircuitPlayerApiCallState,
    updateSetsStats,
    updateMatchesStats,
    updatePosition,
    updateScore,
    updateParticipantsCount,
} from './currentPlayerSlice'

const updateCircuitPlayerInfoAsyncAction = (circuitId, playerId) => (
    (dispatch) => {
        dispatch(updateCircuitPlayerApiCallState(currentPlayerApiCallStates.SENT))
        getCircuitPlayer(circuitId, playerId).then((response) => {
            dispatch(updateSetsStats(response.data.sets))
            dispatch(updateMatchesStats(response.data.matches))
            dispatch(updatePosition(response.data.ranking.position))
            dispatch(updateScore(response.data.ranking.score))
            dispatch(updateParticipantsCount(response.data.circuit_total_participants))
            dispatch(updateCircuitPlayerApiCallState(currentPlayerApiCallStates.SUCCESS))
        }).catch((error) => {
            console.log('Something went Wrong')
            console.log(error)
            dispatch(updateCircuitPlayerApiCallState(currentPlayerApiCallStates.FAILED))
        })
    }
)

export default updateCircuitPlayerInfoAsyncAction
