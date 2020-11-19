import getPlayerRatings from 'lib/getPlayerRatings'
import { updateMatchesApiCallState, currentPlayerApiCallStates, updateMatches } from './currentPlayerSlice'

const updatePlayerRatingsAsyncAction = (rankingId, playerId) => (
    (dispatch) => {
        dispatch(updateMatchesApiCallState(currentPlayerApiCallStates.SENT))
        getPlayerRatings(rankingId, playerId).then((response) => {
            dispatch(updateMatches(response.data.data))
            dispatch(updateMatchesApiCallState(currentPlayerApiCallStates.SUCCESS))
        }).catch((error) => {
            console.log('Something went wrong')
            console.log(error)
            dispatch(updateMatchesApiCallState(currentPlayerApiCallStates.FAILED))
        })
    }
)

export default updatePlayerRatingsAsyncAction