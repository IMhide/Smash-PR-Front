export const updateMatchesAction = (state, action) => {
    state.matches.value = action.payload
} 

export default updateMatchesAction