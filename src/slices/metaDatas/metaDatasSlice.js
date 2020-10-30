
import { createSlice } from '@reduxjs/toolkit';
import updateAllTimeIdAction from './updateAllTimeIdAction'
import updateCurrentIdAction from './updateCurrentIdAction'
import updateMetaDatasAsyncAction from './updateMetaDatasAsyncAction'

export const metaDatasSlice = createSlice({
    name: 'metaDatas',
    initialState: {
        allTimeId: undefined,
        currentId: undefined
    },
    reducers: {
        updateCurrentId: updateCurrentIdAction,
        updateAllTimeId: updateAllTimeIdAction
    }
});

export const { updateAllTimeId, updateCurrentId} = metaDatasSlice.actions;
export const updateMetaDatasAsync = updateMetaDatasAsyncAction
export const selectMetaDatas = (state) => (state.metaDatas)
export default metaDatasSlice.reducer