import { createSlice } from '@reduxjs/toolkit';
import updateMajorsAction from './updateMajorsAction'
import updateMinorsAction from './updateMinorsAction'
import getMinorCircuits from 'lib/getMinorCircuits'
import getMajorCircuits from 'lib/getMajorCircuits'

export const circuitsSlice = createSlice({
  name: 'circuits',
  initialState: {
    majors: [],
    minors: []
  },
  reducers: {
    updateMajors: updateMajorsAction,
    updateMinors: updateMinorsAction
  }
});

export const { updateMajors, updateMinors } = circuitsSlice.actions;

export const updateCircuitsAsync = () => (dispatch) => {
  getMajorCircuits().then((response) => {
    dispatch(updateMajors(response.data))
  }).catch((error) => {
    console.log('Something went wrong')
    console.log(error)
  })

  getMinorCircuits().then((response) => {
    dispatch(updateMinors(response.data))
  }).catch((error) => {
    console.log('Something went wrong')
    console.log(error)
  })
}

export const selectCircuit = (state) => (state.circuits)
export default circuitsSlice.reducer