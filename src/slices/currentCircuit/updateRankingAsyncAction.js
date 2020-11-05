import { updateRanking, updateRankingApiCallState, currentCircuitApiCallStates } from './currentCirtcuitSlice.js'
import getCircuitRanking from 'lib/getCircuitRanking'

const updateRankingAsyncAction = (id, placement) => (dispatch) => {
  dispatch(updateRankingApiCallState(currentCircuitApiCallStates.SENT))
  getCircuitRanking(id, placement).then(response => {
    dispatch(updateRanking(response.data.data))
    dispatch(updateRankingApiCallState(currentCircuitApiCallStates.SUCCESS))
  }).catch(error => {
    console.log('Something Went Wrong')
    console.log(error)
    dispatch(updateRankingApiCallState(currentCircuitApiCallStates.FAILED))
  })
}

export default updateRankingAsyncAction