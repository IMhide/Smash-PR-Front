import { updateCategory, updateName, updateApiCallState, currentCircuitApiCallStates } from './currentCirtcuitSlice.js'
import getCircuit from 'lib/getCircuit.js'

const updateCurrentCircuitAsyncAction = (id) => (dispatch) => {
  dispatch(updateApiCallState(currentCircuitApiCallStates.SENT))
  getCircuit(id).then(reponse => {
    dispatch(updateCategory(reponse.data.category))
    dispatch(updateName(reponse.data.name))
    dispatch(updateApiCallState(currentCircuitApiCallStates.SUCCESS))
  }).catch(error => {
    console.log('Something Went Wrong')
    console.log(error)
    dispatch(updateApiCallState(currentCircuitApiCallStates.FAILED))
  })
}

export default updateCurrentCircuitAsyncAction