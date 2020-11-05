import { updateTournaments, updateTournamentsApiCallState, currentCircuitApiCallStates } from './currentCirtcuitSlice.js'
import getCircuitTournaments from 'lib/getCircuitTournaments'

const updateTournamentsAsyncAction = (id) => (dispatch) => {
  dispatch(updateTournamentsApiCallState(currentCircuitApiCallStates.SENT))
    getCircuitTournaments(id).then((response) => {
    dispatch(updateTournaments(response.data.data))
    dispatch(updateTournamentsApiCallState(currentCircuitApiCallStates.SUCCESS))
  }).catch(error => {
    console.log('Something Went Wrong')
    console.log(error)
    dispatch(updateTournamentsApiCallState(currentCircuitApiCallStates.FAILED))
  })
}

export default updateTournamentsAsyncAction