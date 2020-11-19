import getPlayerTournaments from 'lib/getPlayerTournaments'
import {
    currentPlayerApiCallStates,
    updateTournamentsApiCallState,
    updateTournaments,
} from './currentPlayerSlice'

const updatePlayerTournamentsAsyncAction = (rankingId, playerId) => (
    (dispatch) => {
        dispatch(updateTournamentsApiCallState(currentPlayerApiCallStates.SENT))
        getPlayerTournaments(rankingId, playerId).then((response) => {                
            dispatch(updateTournaments(response.data.data))
            dispatch(updateTournamentsApiCallState(currentPlayerApiCallStates.SUCCESS))
        }).catch((error) => {
            console.log('Something went wrong')
            console.log(error)
            dispatch(updateTournamentsApiCallState(currentPlayerApiCallStates.FAILED))
        })
    }
)

export default updatePlayerTournamentsAsyncAction