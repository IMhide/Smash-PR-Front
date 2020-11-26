import getCircuitPlayer from 'lib/getCircuitPlayer'
import {
    currentPlayerApiCallStates,
    updateCircuitPlayerApiCallState,
    updateSetsStats,
    updateMatchesStats,
    updatePosition,
    updateScore,
    updateParticipantsCount,
    updateName,
} from './currentPlayerSlice'

const updateCircuitPlayerInfoAsyncAction = (circuitId, playerId) => (
    (dispatch) => {
        dispatch(updateCircuitPlayerApiCallState(currentPlayerApiCallStates.SENT))
        getCircuitPlayer(circuitId, playerId).then((response) => {
            const player = response.data.player
            if (player.team.length > 0)
                dispatch(updateName(`${response.data.player.team} | ${response.data.player.name}`))
            else
                dispatch(updateName(response.data.player.name))
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
