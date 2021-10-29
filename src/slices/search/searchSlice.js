import { createSlice } from '@reduxjs/toolkit';
import updateSearchAction from './updateSearchAction'
import togglePlacementAction from './togglePlacementAction'

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        value: '',
        placement: false,
    },
    reducers: {
        updateSearch: updateSearchAction,
        togglePlacement: togglePlacementAction,
    }
})

export const { updateSearch, togglePlacement } = searchSlice.actions
export const selectSearch = (state) => (state.search)
export default searchSlice.reducer
